const express=require('express');
const app=express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const methodOverride=require('method-override');
app.use(methodOverride('_method'));

const Port=process.env.PORT || 5000;

const TodoRoutes=require('./routes/todoRoutes');

app.use('/todo',TodoRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome To W3Dev"})
})

app.use('*',(req,res)=>{
    res.status(404).json({error:"Page Not Found"});
})
app.listen(Port,()=>{
    console.log(`Listening on port ${Port}`);
})
