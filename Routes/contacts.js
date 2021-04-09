const express=require('express'); 
const router=express.Router(); 
const auth=require('../middleware/auth')

const { body, validationResult, check } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');












//@route    GET api/contacts
//@dwesc    Get all users contacts
//@access   Private
router.get('/',auth,(req,res)=>{
    // res.send('get all contacts')
    try{
        const contacts = await Contact.find({user:req.user.id}).sort({date:-1})
        res.json(contacts)
    }
    catch(err){

    }
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