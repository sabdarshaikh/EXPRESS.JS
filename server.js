import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const port = process.env.PORT || 8000;
const app = express();

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
  
  //Logger middleware
  app.use(logger);
  
 // setup static folder
  
   app.use(express.static(path.join(__dirname, 'public')));
  
  
  // Routes
  app.use('/api/posts', posts );
  
//ErrorHandler
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));






// app.get('/' , (req, res) => {
  // res.send ('<h1>Hello World</h1>')
  //res.send ({message : 'Hello World'})
  //     res.sendFile(path.join(__dirname, 'public', 'index.html'))
  // })
  
// app.get('/about', (req, res) => {
  //     res.sendFile(path.join(__dirname, 'public', 'about.html'))
  // })