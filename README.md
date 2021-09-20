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

```
    Open your computer terminal


    # Ensure you have node installed on your computer.
    run *node -v* to check

    # Ensure you have yarn installed on your computer, if it isn't,
    install it through npm using *npm install yarn*.
    You get _npm_ after you install node at https://nodejs.org

    # Fork and clone this repo
    run git clone https://github.com/khrees2412/gratis-assesment

    # cd into the path.
    run cd gratis-assesment

    run *yarn install* to install all the packages needed to run the program

    # start the server
    run *yarn start*
```

# Routes

## Blog Post routes

/post
Create a blog post

```javascript

POST: https://gratis-test-blog.herokuapp.com/api/v1/post

request body must contain a title and content-body

{
    title:  "The heroes of Gabon",
    body:   "The men and women that rescued children during the famous Christmas fire"
}

Example response:

{
    "success" :  true,
    "message" : "New Post has been created"
}

```

/post/:id

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/post/09rh0y3y1u1r0-ur1uu12

Example response:

{
    "success":  true,
    "message" : "Found one post",
    "data" : {
                title: "The heroes of Gabon",
                body:"The men and women that rescued children during the famous Christmas fire"
             }
}

```

/posts

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/posts

Returns an array of all the blog posts in the database

Example response:

{
    "success":  true,
    "message" : "Retrieved all blog posts",
    "data" : [{
                title: "The heroes of Gabon",
                body:  "The men and women that rescued children during the famous Christmas fire"
            },
            {
                title: "The heroes of Italy",
                body:  "The men and women that rescued children during the famous Christmas avanlache"
            }]
}

```

/paginated-posts

```javascript

GET: https://gratis-test-blog.herokuapp.com/api/v1/paginated-posts?limit=2&cursor=2

Returns a paginated array of blog posts

Example response:

{
    "success":  true,
    "data" :
            results :   [{
                    title: "The heroes of Gabon",
                    body:  "The men and women that rescued children during the famous Christmas fire"
                },
                {
                    title: "The heroes of Italy",
                    body:  "The men and women that rescued children during the famous Christmas avanlache"
                }],
            nextCursor : 2,
            itemCount : 2,
            nextPage : 3
}

```

/post/:id

```javascript

PUT: https://gratis-test-blog.herokuapp.com/api/v1/post/2r9-r592-93rurd

Update a blog post

Example response:

{
    "success": true,
    "message" : "Updated one blog post",
}

```

/post/:id

```javascript

DELETE: https://gratis-test-blog.herokuapp.com/api/v1/post/2r9-r592-93rurd

Deletes a blog post

Example response:

{
    "success": true,
    "message" : "Deleted one blog post",
}

```

/posts

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

Add a comment to a blog post

```javascript

POST: https://gratis-test-blog.herokuapp.com/api/v1/comment/[:postID]

request body must contain a blog post id eg hhf230y1y0ry130yr3

Example response:

{
    "success" : true,
    "message" : "Comment has been added to blog post"
}


```

/comment/:id

/comments/post/:postID

/comments

/comment/:id

/comment/:id
