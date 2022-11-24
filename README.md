# Rental Movies Backend

The purpose of the project is to create the backend of a movie and series rental application.

Therefore, we will be using the technologies of Node, Express, as well as Sequelize. In order to do so, the following dependencies shall be installed using the command "npm i". 

Used technologies: 

**Sequelize**: Used to manage and handle the database.

**Express**: It is a framework that let us create the database and the API along with other technologies. It is a layer built on top of Node js that helps to manage servers and routes.

**Bcrypt**: Intended to encrypt passwords.

**JsonWebToken**: Responsible for generating tokens.


  
-------------------------------------------------------------------------------------------------------
## BREAKDOWN OF MAIN COMMANDS


#### GLOBAL DEPENDENCIES INSTALLATION 
```npm i ```

#### RUN THE DEV SCRIPT DEFINED INSIDE THE PACKAGE.JSON
```npm run dev```

#### CREATING THE DATABASE

```sequelize db:create```

![image](https://user-images.githubusercontent.com/114058505/203390504-c0d6f13f-da03-4e91-94cf-8ca0b62934a1.png)

#### MIGRATING TABLES INTO OUR DATABASE

```sequelize db:migrate```

![image](https://user-images.githubusercontent.com/114058505/203390883-c861d350-88c9-4e62-bce9-c1a874303901.png)

#### CREATING THE INFORMATION TO BE CONTAINED IN THE TABLES OF OUR DATABASE

```sequelize db:seed:all```

-------------------------------------------------------------------------------------------------------

## PROJECT ENDPOINTS


#### Create user:
POST - localhost:3000/users/createUser – 
```
{
    "id_user": 3,
    "name": "user2",
    "email": "user2@user2.com",
    "dateBirth": "1950-06-01",
    "password": "Password1",
    "id_usertype": 2
}
```

#### Login:
POST - localhost:3000/users/loginUser – 

```
{
    "email": "admin@admin.com",
    "password": "Bootcamp2022"

}
```

#### Update user:
PUT - localhost:3000/users/updateUser/1 - 
```
{
    "name": "John Doe",
    "email": "john@doe.com",
    "dateBirth": "1992-09-06",
}
```

#### Delete user (Only admin):
DELETE - localhost:3000/users/deleteUser 

#### Films

GET - localhost:3000/films/topRatedFilm 

GET - localhost:3000/films/filmById/5 

GET - localhost:3000/films/filmByName/Se7en 

GET - localhost:3000/films/filmByGenre/action 

#### Series

GET - localhost:3000/series/topRatedSeries

GET - localhost:3000/series/serieById/:id

GET - localhost:3000/series/serieByName/:name

GET - localhost:3000/series/serieUpcomingEpisodes

GET - localhost:3000/series/seriePermit


#### Loans

POST - localhost:3000/loans/newLoan/:id
```
{
     "email": "user@user.com",
     "itemIdItem": 5
}
```

GET - localhost:3000/loans/loansUser/:idUser 

GET - localhost:3000/loans/loanUpdate/:idUser/:loanId

(Only admin)
GET - localhost:3000/loans/fullLoanList



-------------------------------------------------------------------------------------------------------

