# Micro-Instagram Backend
``` This is the API for ChefKart, a platform for managing users and posts. It allows for CRUD (Create, Read, Update, Delete) operations on users and posts, allowing users to create posts, view posts, and manage them.```

## Prerequisites
Before you can use the API, you need the following:

Node.js (v14 or higher)<br>
MySQL (for the database)<br>
Dbeaver(for GUI of Database) <br>


Clone this repository to your local machine:
Copy code
```git clone https://github.com/Shubhamindev/Micro-Instagram)```
``` cd chefkart  ```
##  Install dependencies
Copy code
```npm install```

## Configure your database settings:
Update config/config.json with your MySQL connection details.<br>
Run database migrations:<br>
Copy code
``` npx sequelize-cli db:migrate    ```
Seed the database (optional for initial data):<br>
Copy code
```npx sequelize-cli db:seed:all```
API Endpoints<br>
The API is built with Express.js and Sequelize ORM and has the following routes:<br>

## 1. Get All Users
Method: GET<br>
Endpoint: /api/users<br>
Description: Fetch all users from the database.<br>
Example Response:<br>
json<br>
Copy code
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "post_count": 0
  }
]<br>
## 2. Get All Posts<br>
Method: GET<br>
Endpoint: /api/posts<br>
Description: Fetch all posts, including associated user data.<br>
Example Response:<br>
json<br>
Copy code<br>
[
  {
    "id": 1,
    "title": "Post Title",
    "description": "Post description",
    "userId": 1,
    "user": {
      "id": 1,
      "name": "John Doe"
    }
  }
]<br>
## 3. Create a Post for a User
Method: POST

Endpoint: /api/users/:userId/posts

Replace :userId with an actual userId from your database.
Body (JSON):

json
Copy code
{
  "title": "New Post Title",
  "description": "New Post Description",
  "images": ["image1.jpg", "image2.jpg"]
}
Description: Creates a new post for a specific user. The userId is passed in the URL.

Example Response:

json
Copy code
{
  "id": 2,
  "title": "New Post Title",
  "description": "New Post Description",
  "images": ["image1.jpg", "image2.jpg"],
  "userId": 1
}
4. Edit an Existing Post
Method: PUT

Endpoint: /api/posts/:id

Replace :id with the post ID you want to update.
Body (JSON):

json
Copy code
{
  "title": "Updated Post Title",
  "description": "Updated Post Description",
  "images": ["updated_image.jpg"]
}
Description: Updates the details of an existing post.

Example Response:

json
Copy code
{
  "id": 2,
  "title": "Updated Post Title",
  "description": "Updated Post Description",
  "images": ["updated_image.jpg"]
}
5. Delete a Post
Method: DELETE

Endpoint: /api/posts/:id

Replace :id with the post ID you want to delete.
Description: Deletes a post from the database.

Example Response:

Status: 204 No Content
Running the Application
To run the application locally, use the following command:

bash
Copy code
npm start
The server will start on http://localhost:3000.

Testing the API
You can test the API using tools like Postman or cURL.

Here are the endpoints you can test:

Get All Users: GET http://localhost:3000/api/users
Get All Posts: GET http://localhost:3000/api/posts
Create a Post: POST http://localhost:3000/api/users/:userId/posts
Edit a Post: PUT http://localhost:3000/api/posts/:id
Delete a Post: DELETE http://localhost:3000/api/posts/:id
Error Handling
The API returns appropriate HTTP status codes and error messages for failed requests.

404 Not Found: When a user or post is not found.
500 Internal Server Error: When something goes wrong on the server side.
License
This project is licensed under the MIT License - see the LICENSE file for details.
