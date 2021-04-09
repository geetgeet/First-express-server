const express=require('express'); 
const router=express.Router(); 

//@route    GET api/contacts
//@dwesc    Get all users contacts
//@access   Private
router.get('/',(req,res)=>{
    res.send('get all contacts')
});

//@route    POST api/contacts
//@dwesc    Add new contsct
//@access   Private
router.post('/',(req,res)=>{
    res.send('add contact')
});


//@route    PUT api/contacts/:id
//@dwesc    Update contact
//@access   Private
router.put('/:id',(req,res)=>{
    res.send('update contact')
});

//@route    DELET api/contacts/:id
//@dwesc    Delet contsct
//@access   Private
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
});


module.exports=router