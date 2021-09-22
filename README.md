# GRATIS DIGITAL ASSESSMENT

This serves as my submission for the Gratis Digital Junior Backend Developer position. It is a basic NodeJs REST API which fulfils the very basic requirements of a Blog App. It is hosted at https://gratis-test-blog.herokuapp.com .

All requirements for this assessment have been met and can be viewed in this README file.

-   A user can create a blog post
-   A user can view a blog post
-   A user can delete a blog post
-   A user can update the details of a blog post
-   A user can add a comment to a post
-   A user can view a comment on a post
-   A user can delete a comment
-   A user can update the details of a comment

# Special Attention

I implemented a many-to-one relationship between the Blog post and the comments. You get a populated array of comments for every post.

I decoupled the routes handler from the routes to enable easy project maintenance.

I used express validator library to validate the request body to ensure proper the basic requirements were met.

I implemented basic testing of controllers to ensure the routes worked with the right request body.

#### This project was built using Nodejs and MongoDB

### Libraries used

1. Expressjs: Used to create the server and write the APIs
2. Mongoose: Used as an ODM to query the MOngoDB database
3. Express-validator: Used to validate http request body
4. Cors: To enable cross origin resource sharing
5. Dotenv: Used to load the contents of the .env file
6. Mocha: Used to test the API response ensuring it met all business requirements
7. Chai: Javascript assertion library used alongside Mocha for testing
8. Chai-http : Used alongside Chai

# How To Setup

    Open your computer terminal

```
    # Ensure you have node installed on your computer.
    run `node -v` to check
```

#Ensure you have yarn installed on your computer, if it isn't,
install it through npm using

```
    `npm install yarn`.
    You get **npm** after you install node at https://nodejs.org
```

#Clone this repo

```
    run `git clone https://github.com/khrees2412/gratis-assesment`
```

#cd into the path.

```
    run `cd gratis-assesment`
```

```
    run `yarn install` to install all the packages needed to run the program
```

#start the server

```
    run `yarn start`
```

#Run the tests

```
    run `yarn test`
```

## Get your MongoDB Atlas URI string from https://mongodb.com

```
It looks like :
mongodb+srv://<Username>:3824hr0380d932C@cluster0.1oyqm.mongodb.net/<Database_Name>?retryWrites=true&w=majority

Add to a .env file

MONGO_URI = mongodb+srv://<Username>:3824hr0380d932C@cluster0.1oyqm.mongodb.net/<Database_Name>?retryWrites=true&w=majority

```

# Routes

## Blog Post routes

Note: All returned data have "\_id"s (gotten from mongoDB) not exactly included in this doc

/post
Create a blog post

```javascript

POST: https://gratis-test-blog.herokuapp.com/api/v1/post

request body must contain a title and content-body

{
    title:  "Fourth Post",
    body:   "another one man!"
}

Example response:

{
  "success": true,
  "message": "New blog post created",
  "data": {
    "title": "fourth Post",
    "body": "another one man!",
    "comments": [],
    "_id": "614852e373d3707adeabc4ff",
    "createdAt": "2021-09-20T09:22:43.373Z",
    "updatedAt": "2021-09-20T09:22:43.373Z",
    "__v": 0
  }
}

```

/post/:id
Get a blog post

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/post/61485109061a72b3d64e0950
Returns a particular blog post

Example response (populated with comments):
{
  "success": true,
  "message": "Found one blog post",
  "data": {
    "_id": "61485109061a72b3d64e0950",
    "title": "third Post",
    "body": "another one baby!",
    "comments": [
      {
        "_id": "6148515d9db8cc21fa847c00",
        "post": "61485109061a72b3d64e0950",
        "content": "Baby comment",
        "createdAt": "2021-09-20T09:16:13.800Z",
        "updatedAt": "2021-09-20T09:16:13.800Z",
        "__v": 0
      }
    ],
    "createdAt": "2021-09-20T09:14:49.605Z",
    "updatedAt": "2021-09-20T09:16:14.113Z",
    "__v": 0

```

/posts
Find all available blog posts

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/posts

Returns an array of all the blog posts in the database

Example response:

{
  "success": true,
  "message": "Found all blog posts",
  "data": [
    {
      "_id": "61485078df61d3e17973842b",
      "title": "First Post",
      "body": "The start of it all",
      "comments": [],
      "createdAt": "2021-09-20T09:12:24.469Z",
      "updatedAt": "2021-09-20T09:12:24.469Z",
      "__v": 0
    },
    {
      "_id": "614850d3061a72b3d64e094d",
      "title": "second Post",
      "body": "another post",
      "comments": [],
      "createdAt": "2021-09-20T09:13:55.328Z",
      "updatedAt": "2021-09-20T09:13:55.328Z",
      "__v": 0
    },
    {
      "_id": "61485109061a72b3d64e0950",
      "title": "third Post",
      "body": "another one baby!",
      "comments": [
        "6148515d9db8cc21fa847c00"
      ],
      "createdAt": "2021-09-20T09:14:49.605Z",
      "updatedAt": "2021-09-20T09:16:14.113Z",
      "__v": 0
    }
  ]
}

```

/paginated-posts
Get a paginated list of all blog posts

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/paginated-posts?limit=2&cursor=1

Returns a paginated array of blog posts

Example response:
{
  "data": [
    {
      "_id": "61485078df61d3e17973842b",
      "title": "First Post",
      "body": "The start of it all",
      "comments": [],
      "createdAt": "2021-09-20T09:12:24.469Z",
      "updatedAt": "2021-09-20T09:12:24.469Z",
      "__v": 0
    },
    {
      "_id": "614850d3061a72b3d64e094d",
      "title": "second Post",
      "body": "another post",
      "comments": [],
      "createdAt": "2021-09-20T09:13:55.328Z",
      "updatedAt": "2021-09-20T09:13:55.328Z",
      "__v": 0
    }
    ],
  "nextCursor": 2,
  "itemCount": 4,
  "currentPage": 1
}
```

/post/:id
Update a blog post

```javascript

PUT: https://gratis-test-blog.herokuapp.com/api/v1/post/614850d3061a72b3d64e094d

Update a blog post

Example response:

{
  "success": true,
  "message": "Updated one blog post",
  "data": {
    "_id": "614850d3061a72b3d64e094d",
    "title": "The cool Post",
    "body": "Good vibes",
    "comments": [],
    "createdAt": "2021-09-20T09:13:55.328Z",
    "updatedAt": "2021-09-20T09:28:09.559Z",
    "__v": 0
  }
}
```

/post/:id
Delete a blog post

```javascript

DELETE: https://gratis-test-blog.herokuapp.com/api/v1/post/61485109061a72b3d64e0950

Deletes a blog post

Example response:

{
    "success": true,
    "message" : "Deleted one blog post",
}

```

/posts
Delete all blog posts

```javascript

DELETE: https://gratis-test-blog.herokuapp.com/api/v1/posts

Deletes all blog posts in the database

Example response:

{
    "success": true,
    "message" : "Deleted all blog posts",
}

```

## Comment Routes

/comment/:postID
Add a comment to a blog post

```javascript

POST: https://gratis-test-blog.herokuapp.com/api/v1/comment/61485078df61d3e17973842b

request body must contain a blog post id eg hhf230y1y0ry130yr3

Example response:

{
  "success": true,
  "message": "Comment added to blog post",
  "data": {
    "post": "61485078df61d3e17973842b",
    "content": "a simple comment",
    "_id": "6148550e06f1400817d295d8",
    "createdAt": "2021-09-20T09:31:58.426Z",
    "updatedAt": "2021-09-20T09:31:58.426Z",
    "__v": 0
  }
}

```

/comment/:id
Get a particular comment by id

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/comment/6148550e06f1400817d295d8


Example response:

{
  "success": true,
  "message": "Found one comment ",
  "data": {
    "_id": "6148550e06f1400817d295d8",
    "post": "61485078df61d3e17973842b",
    "content": "a simple comment",
    "createdAt": "2021-09-20T09:31:58.426Z",
    "updatedAt": "2021-09-20T09:31:58.426Z",
    "__v": 0
  }
}

```

/comments
Get a list of all comments available in the database

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/comments

Returns an array of all comments in the database

Example response:

{
  "success": true,
  "message": "Retrieved all comments ",
  "data": [
    {
      "_id": "6148515d9db8cc21fa847c00",
      "post": "61485109061a72b3d64e0950",
      "content": "Baby comment",
      "createdAt": "2021-09-20T09:16:13.800Z",
      "updatedAt": "2021-09-20T09:16:13.800Z",
      "__v": 0
    },
    {
      "_id": "6148550e06f1400817d295d8",
      "post": "61485078df61d3e17973842b",
      "content": "a simple comment",
      "createdAt": "2021-09-20T09:31:58.426Z",
      "updatedAt": "2021-09-20T09:31:58.426Z",
      "__v": 0
    }
  ]
}

```

/comments/post/:postID
Get a list of all comments available in a blog post

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/comments/post/61485078df61d3e17973842b

Returns an array of all comments  in a blog post

Example response:
{
  "success": true,
  "message": "Retrieved all comments from blog post",
  "data": [
    {
      "_id": "6148571311f8165534bbf12c",
      "post": "61485078df61d3e17973842b",
      "content": "another simple comment",
      "createdAt": "2021-09-20T09:40:35.775Z",
      "updatedAt": "2021-09-20T09:40:35.775Z",
      "__v": 0
    }
  ]
}
```

/comment/:id
Update a blog post

```javascript

PUT: https://gratis-test-blog.herokuapp.com/api/v1/comment/6148550e06f1400817d295d8


Example response:

{
  "success": true,
  "message": "The comment has been updated",
  "data": {
    "_id": "6148550e06f1400817d295d8",
    "content": "one simple comment",
    "updatedAt": "2021-09-20T09:44:05.332Z",
    "createdAt": "2021-09-20T09:44:05.332Z"
  }
}


```

/comment/:id
Delete a comment

```javascript

DELETE: https://gratis-test-blog.herokuapp.com/api/v1/comment/6148550e06f1400817d295d8


Example response:
{
  "success": true,
  "message": "Comment deleted from blog post"
}

```
