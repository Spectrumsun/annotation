# Phone 
A simple web application to search and buy phones

# View App
    * Backend Hosted API  https://back-phone.herokuapp.com/api/v1/phones
    * Host App Frontend   https://front-phone.herokuapp.com/


# Technologies Used
   * Back-end: Node/Expressjs + MongoDB/Mongoose
   * Libraries: ES6, Babel-CLI, eslint, express

# Features
   * A user can get the list of phones
   * A user can search for a phone based on user input text
   * A user can search based on price filter
   * A user can switch between buyers and sellers request

# EndPoints
  * GET: /
  * GET: /api/v1/phones


# Queries
  * type: to specify the buyer or sell request, type=buyer or type-seller
  * min,max: to specify the min price and max price when searching with price filter, min=30&max=40
  * search: to specify a full text search search=iphone x,128gb,new


# To Install
  * Download or clone the repo
  * open terminal inside root directory of cloned folder
  * type yarn to install all dependencies
  * type yarn seed to seed database
  * create a .env file and add the DATABASE with your mongoDB database URL to it
  * yarn start to run the app


# FAQs
* Contact spectrumsun@hotmail.com


# LICENSE
* [MIT](./LICENSE) © [Taiwo Sunday]

Copyright (c) 2018 Taiwo Sunday