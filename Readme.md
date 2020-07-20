# Book store API
Rest API for a book store app using Node.js, Express and MongoDB.

## Steps to Setup

1. Install dependencies

$ npm install


2. Run Server

$ node app.js


app runs on local host 3000

## steps to search books:

# prerequisites:
=> install docker

$ docker pull mongo
$ docker run --name my_mongo_DB -d -p 127.0.0.1:27017:27017 mongo

1. start the app by running "node app.js"
2. app will run at localhost:3000 => homepage
3. add books by calling post method to localhost:3000/books

POST localhost:3000/books
sample body:

{
    "name": "Maths",
    "author": "Tony"
}

4. List all the books

GET localhost:3000/books


5. search book by name

GET localhost:3000/books/<BOOK_NAME>

ex: GET localhost:3000/books/Maths