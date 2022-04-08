# **Alos_act2**
## TP 2
**Pair : Benzidane Mohamed G2 & Belghali Abdallah G1**

### Setting Up the Project
- First, we initialized a new Node.js project using command:
```
$ npm init -y
```
We ended up with a package.json file. This is a json file that contains all the relevant metadata on our project.
- Then, installed express using command:
```
$ npm install express
```
A new file is created in the directory, alongside a node_modules directory. The package-lock.json file keeps track of our dependencies and contains their versions and names.
The node_modules directory hosts the code of the dependencies, and can get quite large so we added **.gitignore** for that one.
### Creating Endpoint
- After creating index.js, we started by integrating the express framework into our file
```
const express = require('express')
const app = express()
```
Then set our port:
```
app.listen(3000)
```
We used Nodemon framework which allows us to automatically restart our node server each time we save our file.
to install nodemon run command:
```
$ npm i --save-dev nodemon
```
- First, we created ``POST`` request, to add data.
To retrieve the data passed in the ``POST`` request, we need to add middleware to our Node JS API so that it is able to interpret the request body. This middleware will place itself between the arrival of the request and our routes and execute its code, making it possible to access the body.

Our middleware will be **body-parser**. which helps us decode the body from an HTTP request:
```
$ npm install --save body-parser
```
It parses the body of the request and lets us react to it accordingly.

Since we are calling the API from different locations by hitting endpoints in the browser. We also have to install the **CORS** middleware.
```
$ npm install --save cors
```
- Then, we created a simple HTML form with the fields which we'll be sending the data to the API using it.

![interface image](https://github.com/LogariusIV/Html-project/blob/main/Screenshot%20from%202022-04-08%2019-21-06.png)

Clicking **Submit**, we're greeted with the our applications console.log(liga) statement:

![console img](https://github.com/LogariusIV/Html-project/blob/main/Screenshot%20from%202022-04-08%2022-32-57.png)

- Next, we created a ``app.get`` endpoint right beneath the ``POST``. When a user hits the endpoint with a ``GET`` request, the data from the array will be returned.
If we'd like to display a specific data to the user, we'll need a way to retrieve it from the array.This is typically done by parsing the URL parameter for an id and searching for the data with the corresponding id.

For an exemple:
`http://localhost:3000/laliga/1`
- For testing we used Talend API tester which is a chrome extension.
