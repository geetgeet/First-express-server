const mongoose =require('mongoose');
const config=require ('config');
const db=config.get('mongoURI');

const connectDB = async ()=>{
try{
    await mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false
    }) ;
    console.log('Mongodb connected')

}catch(err){
 console.error(err.message);
        process.exit(1);
}
/*
//Done way above for neater code
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}) 
    .then(()=>console.log('mongoose db connected'))
    .catch(err=>{
       

        });*/
};

module.exports=connectDB