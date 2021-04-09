const express=require('express'); 
const router=express.Router(); 
const auth=require('../middleware/auth')

const { body, validationResult, check } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');












//@route    GET api/contacts
//@dwesc    Get all users contacts
//@access   Private
router.get('/',auth, async (req,res)=>{
    // res.send('get all contacts')
    try{
        const contacts = await Contact.find({user:req.user.id}).sort({date:-1})
        res.json(contacts);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('server error')


    }
});

//@route    POST api/contacts
//@dwesc    Add new contsct
//@access   Private
router.post('/',[auth,[
    check('name',"NAme is required").not().isEmpty()
]],

async (req,res)=>{
    // res.send('add contact')
    const errors=validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
    const {name,email,phone,type}=req.body;
    try{
        const newContact= new Contact ({
            name,
            email,
            phone,
            type,
            user:req.user.id
        });
        const contact = await newContact.save()
        res.json(contact)
        
    }
    catch(err){
        console.error(err.message);
        res.send(500).send('server error')
    }
});


//@route    PUT api/contacts/:id
//@dwesc    Update contact
//@access   Private
router.put('/:id',auth,async (req,res)=>{
    // res.send('update contact')
    
    const {name,email,phone,type}=req.body;

    //buld a contact obj
    const contactFields={};
    if (name) contactFields.name=name;
    if (email) contactFields.email=email;
    if (phone) contactFields.phone=phone;
    if (type) contactFields.typr=type;


    try{
        let contact= await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({msg:"not found"});
        //make sure user owns contsct
        if (contact.user.toString() !== req.user.id){
            return res.status(401).json({msg:"unauthorised"})
        }
        contact = await Contact.findByIdAndUpdate(req.params.id,
            {$set:contactFields},
            {new:true});
    }


    catch(err){
        
        console.error(err.message);
        res.send(500).send('server error')
    }
});

//@route    DELET api/contacts/:id
//@dwesc    Delet contsct
//@access   Private
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
});


module.exports=router