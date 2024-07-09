import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';

const port = process.env.PORT || 8000;
const app = express();

// setup static folder

 //app.use(express.static(path.join(__dirname, 'public')));
 
// app.get('/' , (req, res) => {
  // res.send ('<h1>Hello World</h1>')
    //res.send ({message : 'Hello World'})
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
// })

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Logger middleware
app.use(logger);


// Routes
app.use('/api/posts', posts );



app.listen(port, () => console.log(`Server running on port ${port}`));