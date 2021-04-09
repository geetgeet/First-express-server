const express= require('express');
const connectDB= require('./config/db');

const app =express();

//connect database 
connectDB();

//Init Middleware
app.use(express.json({extended:false}));
app.get('/',(req,res)=>res.json({"msg":'Hello,welcome to server'}));


//Define Rooutes
app.use('/api/users',require('./Routes/users'));
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/contacts',require('./Routes/contacts'));


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server is on ${PORT}`))