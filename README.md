# GRATIS DIGITAL ASSESSMENT

This serves as my submission for the Gratis Digital junior backend developer position. It is a basic NodeJs REST API which fulfils the very basic requirements of a Blog App. It is hosted at https://gratis-test-blog.herokuapp.com

-   A user can create a blog post
-   A user can view a blog post
-   A user can delete a blog post
-   A user can update the details of a blog post
-   A user can add a comment to a post
-   A user can view a comment on a post
-   A user can delete a comment
-   A user can update the details of a comment

# This project was built using Nodejs

### Libraries used

1. Expressjs: Used to create the server and write the APIs
2. Express-validator: Used to validate http request body
3. Mocha: Used to test the API response ensuring it met all business requirements
4. Chai: Javascript assertion library used alongside Mocha for testing

# How To Setup

-   Ensure you have node installed on your computer.
-   Ensure you have yarn installed on your computer, if it isn't, install it through npm using _npm install yarn_. You get _npm_ after you install node at https://nodejs.org
-   Fork and clone this repo
-   cd into the path
-   Open your terminal and type <yarn install>, this will install all the packages needed to run the program

# Routes

## Post routes

/post
/post/:id"

/api/v1/posts

/apiv1/paginate-post

/post/:id

/posts

/post/:id

## Comment Routes

Add a comment to a blog post

```javascript

POST: https://gratis-test-blog.herokuapp.com/api/v1/comment/[:postID]

request body must contain a blog post id e.g hhf230y1y0ry130yr3

Example response:

{
    "success":true,
    "message" :"Comment has been added to blog post"
}


```

/comment/:id

/comments/post/:postID

/comments

/comment/:id

/comment/:id
