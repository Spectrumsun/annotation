import Questions from "../Database/models/Questions";
import Topic from "../Database/models/Topics";

class Annotation {
  static welcome(req, res) {
    res.status(200).json({ message: "Welcome to search" });
  }

  static async search(req, res) {
    const { q } = req.query;
    const p = await Topic.find({ $query:{ parent: q } })
    if(p.length < 1) {
      return res.status(200).json({ 
        status: 'Success', 
        query: q,
        p
      })
    }
    const parentToChild = await Topic.aggregate([
        { $match:{ ancestors: q } },
        { $project:{_id: 1 } },
        { $group:{_id: {}, descendant:{ $addToSet:"$_id" }} }
    ])
    const questionNumber = await Annotation.searchFunction(parentToChild[0].descendant)
    res.status(200).json({ 
      status: 'Success', 
      query: q,
      questionNumber,
      subTree: parentToChild[0].descendant,
    })
  }

  static async searchFunction(searchData) {
    const searchQuestion = await Questions.aggregate(
      [
        {$match: { annotations:  {$in: searchData } } },
        { $group:{_id: {}, questionNumbers:{ $addToSet:"$questionNumber" }} }
      ]

    )
    return searchQuestion[0].questionNumbers;
  }

}

export default Annotation;
