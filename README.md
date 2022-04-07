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
- First, we created ``GET`` endpoint right beneath the boilerplate. When a user hits the endpoint with a ``GET`` request, the data from [laliga.json](https://github.com/LogariusIV/Alos_act2/blob/main/laliga.json) will be returned.
- Then, ``POST`` endpoint:

To retrieve the data passed in the ``POST`` request, we need to add middleware to our Node JS API so that it is able to interpret the request body. This middleware will place itself between the arrival of the request and our routes and execute its code, making it possible to access the body.

Our middleware will be **body-parser**. Since express has natively integrated body parser, we can therefore just use ``express.json()`` and avoid importing a new library already present in Express.
