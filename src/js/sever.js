import express from 'express';

// Express sever setup 

const exapp = express();

exapp.use(express.static('dist')); //Sever static files from the public folder

// start the Express server 
exapp.listen(8000,()=>{
    console.log('Sever is running on http://localhost:8000');    
});