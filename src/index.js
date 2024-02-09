import app from './app.js';
import mongoose from './database.js'; 
const port=process.env.PORT;

app.listen(port,()=>{
    console.log('Server on port:'+port);
})

