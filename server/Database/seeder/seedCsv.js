import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import neatCsv from "neat-csv";
import Question from "../models/Questions";
import Topic from "../models/Topics";
import "dotenv/config";

const loadFileToMemory = async (fileName) => {
  const filePath = path.resolve(__dirname, fileName);
  const readFile = fs.readFileSync(filePath, 'utf8');
  const parsedFile = await neatCsv(readFile);
  return parsedFile;
}

const insertQuestion = async () => {
  const file = await loadFileToMemory('Questions.csv');
  const cleanData = file.map((v) => {
    return {
      questionNumber: v['Question number'],
      annotations: [
        v['Annotation 1'],
        v['Annotation 2'],
        v['Annotation 3'],
        v['Annotation 4'],
        v['Annotation 5'],
      ],
    };
  });
  const removeEmpty = cleanData.map((quest) => {
    return {
      questionNumber: quest.questionNumber,
      annotations: quest.annotations.filter((value) => value !== '')
    }
    

  })
  await Question.insertMany(removeEmpty);
  console.log('Questions added')
}

const insertTopic = async () => {
  const file = await loadFileToMemory('Topics.csv')
  for(const topic of file) {
    const level1 = await Topic.findOne({_id: topic['Topic Level 1'] });
    if(level1 === null) {
        await Topic.create({
        _id: topic['Topic Level 1'],
        ancestors: [],
        parent: null,
        topicLevel: 'Topic Level 1'
      });
    }
    const topicLevel2 = await Topic.findOne({_id: topic['Topic Level 2'] });
    if(topicLevel2 === null && topic['Topic Level 2'] !== '') {
      await Topic.create({
        _id: topic['Topic Level 2'],
        ancestors: [topic['Topic Level 1']],
        parent: topic['Topic Level 1'],
        topicLevel: 'Topic Level 2'
      });
      }
    const topicLevel3 = await Topic.findOne({_id: topic['Topic Level 3'] });
    if(topicLevel3 === null && topic['Topic Level 3'] !== '') {
      await Topic.create({
        _id: topic['Topic Level 3'].trim(),
        ancestors: [topic['Topic Level 1'], topic['Topic Level 2']],
        parent: topic['Topic Level 2'],
        topicLevel: 'Topic Level 3'
      });
    }
  }
  console.log('Topics added')
}

// insertTopic();
// insertQuestion();
export default insertTopic;
