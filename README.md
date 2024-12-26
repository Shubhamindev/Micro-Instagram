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
Method: POST<br>

Endpoint: /api/users/:userId/posts<br>

Replace :userId with an actual userId from your database.<br>
Body (JSON):<br>

json<br>
Copy code
{
  "title": "New Post Title",
  "description": "New Post Description",
  "images": ["image1.jpg", "image2.jpg"]
}<br>
Description: Creates a new post for a specific user. The userId is passed in the URL.<br>

Example Response:<br>

json<br>
Copy code<br>
{
  "id": 2,
  "title": "New Post Title",
  "description": "New Post Description",
  "images": ["image1.jpg", "image2.jpg"],
  "userId": 1
}<br>
## 4. Edit an Existing Post<br>
Method: PUT<br>

Endpoint: /api/posts/:id<br>

Replace :id with the post ID you want to update.<br>
Body (JSON):<br>

json<br>
Copy code<br>
{
  "title": "Updated Post Title",
  "description": "Updated Post Description",
  "images": ["updated_image.jpg"]
}<br>
Description: Updates the details of an existing post.<br>

Example Response:<br>

json<br>
Copy code<br>
{
  "id": 2,
  "title": "Updated Post Title",
  "description": "Updated Post Description",
  "images": ["updated_image.jpg"]
}<br>

## 6. Get All Posts of a Specific User
Endpoint: GET /api/users/:userId/posts <br>
Description: Fetch all posts for a specific user by their userId.<br>
Response:<br>
json<br>
Copy code<br>
[
  {
    "id": 1,
    "title": "Post 1 by User",
    "description": "Description of the first post",
    "images": ["image1.jpg", "image2.jpg"],
    "userId": 1,
    "user": {
      "id": 1,
      "username": "JohnDoe",
      "email": "john@example.com"
    }
  },
  {
    "id": 2,
    "title": "Post 2 by User",
    "description": "Description of the second post",
    "images": ["image3.jpg"],
    "userId": 1,
    "user": {
      "id": 1,
      "username": "JohnDoe",
      "email": "john@example.com"
    }
  }
]<br>
Description: Fetch all posts for a given user. You need to provide the userId of the user whose posts you want to fetch.<br>

## 5. Delete a Post
Method: DELETE<br>

Endpoint: /api/posts/:id<br>

Replace :id with the post ID you want to delete.<br>
Description: Deletes a post from the database.<br>

Example Response:<br>

Status: 204 No Content<br>
Running the Application<br>
## To run the application locally, use the following command:<br>

bash<br>
Copy code
```npm start```
The server will start on ```http://localhost:3000.```

## Testing the API
You can test the API using tools like Postman or cURL.<br>

Here are the endpoints you can test:<br>

Get All Users: GET ```http://localhost:3000/api/users```<br>
Get All Posts: GET ```http://localhost:3000/api/posts```<br>
Create a Post: POST ```http://localhost:3000/api/users/:userId/posts```<br>
Edit a Post: PUT ```http://localhost:3000/api/posts/:id```<br>
Delete a Post: ```DELETE http://localhost:3000/api/posts/:id```<br>
Get Post of Specific User: GET ```http://localhost:3000/api/users/1/posts```<br>
## Error Handling<br>
The API returns appropriate HTTP status codes and error messages for failed requests.<br>

404 Not Found: When a user or post is not found.<br>
500 Internal Server Error: When something goes wrong on the server side.<br>
## License<br>
This project is licensed under the MIT License - see the LICENSE file for details.
