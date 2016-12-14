# RecipeDB
Project made for the course "Webapps" as exam exercise.
The aim of the project is to show what we learned during the course and use this in a project.

## Technologies used
The project makes use of the following:

* NodeJS
* AngularJS 1.5
* MongoDB
* Gulp

## How to run
you can find a live example of the app at: http://www.recipedb.pw

you are free to register using the register key: 

    pass

or run the app local by following the next steps.

### 1. Start mongoDB
    sudo mongod

### 2. Start the backend (NodeJS)
Navigate to the backend folder and run following commands:

    npm install
    npm start
*or* **nodemon** *if you have it installed:*

    nodemon

### 3. Start the frontend (AngularJS)
Navigate to the frontend folder and run following commands:

    npm install
    gulp


### 4. Open a browser and navigate to:
    localhost:4000

# RecipeDB API
De backend van het project vind je terug in de backend folder. 
Zie 'How to run' om deze op te zetten.

## Users

### GET User
/users/user
* Requires: Authentication
* Returns a single user object

### POST User
/users/login
* Returns a user object on success
* Returns 422 on failure

### POST User [Create user]
/users
* Returns a single user

## Recipes

### GET Recipes
/recipes
* Requires: Authentication
* Returns a list of recipes

### GET Recipe
/recipes/:recipe-slug
* Requires: Authentication
* Returns a single recipe

### GET Recipes with filter
/recipes/filter/:filter
* Requires: Authentication
* Returns a list of recipes that matches the filter

### POST Recipes
/recipes
* Requires: Authentication, recipe object
* Returns added recipe object

### PUT Recipes
/recipes/:recipe-slug
* Requires: Authentication, recipe object
* Returns recipe on success

### DELETE Recipes
/recipes/:recipe-slug
* Requires: Authentication
* Returns 204 on success
