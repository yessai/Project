const express = require('express');
const app = express();
const path= require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));

app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({ extended: false }));
const logMiddleware = (req, res, next) => {
    console.log(`Received request at ${new Date()}`);
    next(); 
  };

   var name= 'tom';
var products= {
      1:{ name:'Apple', price:20},
      2:{ name:'Orange', price:30},
  };


const genres = ['Dystopian', 'Fiction', 'Science Fiction', 'Fantasy'];

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

  app.get('/books', (req, res) => {
    res.send('Hello from Express!');
  });

  app.get('/books/:id', (req, res) => {
    res.send('Hello book with id:'+ req.params.id);
  });

  app.get('/addauthor', (req, res) => {
 

    res.render('addbook');
  });

  app.post('/authors', (req, res) => {
    name= req.body.name;
    price=req.body.price;
    id=Object.keys(products).length +1;

    products[id]={
      name:name , price:price
    };
    res.redirect ('/authors');

    //res.send('book added');
  });

  app.get('/authors', (req, res) => {

    ctx={
        'products':products

        }
      
    

    res.render('authors',ctx);
    
  });

  app.get('/authors/:id', (req, res) => {
    const id=req.params.id;
   CTX= genres[id];

    res.send('Hello book with id:'+ req.params.id);
  });

  app.get('/genres', (req, res) => {
      
    ctx={
        'genres':[
          
          {id:1, Category :'Dystopian'},
          {id:2, Category :'Fiction'},
          {id:3, Category :'Science Fiction'},
          {id:4, Category :'Fantasy'}
        
        
        ]
      
    }

    res.render('genres',ctx);
    
  });
  


  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});