const express= require('express')
const bodyParser= require('body-parser')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10


const pgp = require('pg-promise')()
app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



 connectionString = {
    "host": "isilo.db.elephantsql.com",
    "port": 5432,
    "database": "wqvacxnt",
    "user": "wqvacxnt",
    "password":"bM2NzSbufCMxdKbPApBC81ccllnzndGm"
  
  }

db = pgp(connectionString)


let books = [
{name: 'Book 1'},
{name: 'Book 2'}
]

app.get('/', (req, res) => {
    res.send('hello')
})


app.post('/api/books',(req,res) => {

    let name = req.body.name
    let genre = req.body.genre
    let publisher= req.body.publisher
    let year = req.body.year
    let image = req.body.image
  
    console.log(name)
    console.log(genre)
    console.log (publisher)
    console.log (year)
    console.log(image)
  
    books.push({name:name, genre:genre, publisher:publisher, year:year, image:image})
    db.one('INSERT INTO reactbooks (book_name,book_genre,book_publisher,book_year) VALUES($1,$2,$3,$4) RETURNING id',[name, genre, publisher,year,])
    
      
      .then((saved) => {
        if(saved) {console.log (saved)
          res.json({success: true})
        } else {
          res.json({success: false, message: 'Error saving book'})
        }
      })
    
  })
  
  app.get('/api/books',(req,res) => {
    
    db.any('SELECT * FROM reactbooks ORDER BY id')
    .then((books)=>{res.json(books)})
    
  })

  app.post('/api/delete-book',(req,res) => {

    let id = req.body.id
    
  
    console.log(id)
    
  
    db.one('DELETE FROM reactbooks WHERE id = $1 RETURNING id' ,[id])
    
      .then((deleted) => {
        if(deleted) {console.log (deleted)
          res.json({success: true})
        } else {
          res.json({success: false, message: 'Error deleting book'})
        }
      })
    
  })

  app.post('/api/update-book',(req,res) =>{
    let name = req.body.name
    let genre = req.body.genre
    let publisher= req.body.publisher
    let year = req.body.year
    let id = parseInt(req.body.id)
    //let image = req.body.image

    console.log(name,genre,publisher,year,id)
    db.one("UPDATE reactbooks SET book_name =$1, book_genre =$2,book_publisher=$3,book_year=$4 WHERE id = $5 RETURNING id",[name,genre,publisher,year,id])
    .then((updated) => {
      if(updated) {console.log (updated)
        res.json({success: true})
      } else {
        res.json({success: false, message: 'Error updating book'})
      }
    })
  
  })


  //adding a new user 
  app.post('/register', (req,res) => {
    let userName = req.body.userName
    let firstName = req.body.firstName
    let lastName= req.body.lastName
    let hash = bcrypt.hashSync(req.body.password, saltRounds)
console.log(userName,firstName,lastName,hash)

    db.one('SELECT EXISTS(SELECT user_name FROM users WHERE user_name = $1)', [userName])
    .then((user) => {
      if (user.exists) {
        res.json({exists: true})
      } else {
        db.one('INSERT INTO users (first_name,last_name,user_name, hash) VALUES($1,$2,$3,$4) RETURNING id', [firstName, lastName,userName, hash])
        .then((added)=>{
          if(added){
            console.log(added)
            res.json({success: true})
          }
          else {
            res.json({success: false, message: 'Error adding user'})
          }
        
        })
        
      }
    })
  })
 // logging in new user

 app.post ('/login',(req,res) => {
  let userName = req.body.userName
  //console.log(userName)
  db.one('SELECT EXISTS(SELECT user_name FROM users WHERE user_name = $1)', [userName])
  .then((user) => {
    //console.log(user.exists)
    if (user.exists){
      //console.log("we got one")
      db.one('SELECT hash FROM users WHERE user_name=$1', [userName])
      .then((logger)=>{
        bcrypt.compare(req.body.password, logger.hash, function(err, result){
          if (result){
            res.json(result)
            console.log("result coming back")
            console.log(result)
          }else{
            res.json(result)
            console.log("error coming back")
            console.log(result)
          }

        })
      })
    
      }
    
        
    
      else{
        console.log("error")
       }
    })
  
  })
  
        
     
  
    
  
  
app.listen(8080,()=>{
console.log("At your service")
})
