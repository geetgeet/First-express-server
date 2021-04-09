const express=require('express'); 
const router=express.Router(); 

//@route    POST api/users
//@dwesc    Register user
//@access   Public
router.post('/',(req,res)=>{
    res.send('register user')
});

module.exports=router;