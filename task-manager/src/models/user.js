const mongoose = require('mongoose') 
const validator = require('validator') 

const User = mongoose.model('User', {  
 name: {  
         
     type: String,
     required:true,
     trim:true
    
 },
 email: {     
     
     type: String, 
     
     required: true, 
     
     trim: true,   
     
     lowercase: true, 
     
     validate(value) {   
         
         if (!validator.isEmail(value)) {       
             
             throw new Error('Email is invalid')    
         
         }   
     }   
 },
     
 password:{
     type:String,
     required:true,
     minlength:7,
     trim:true,
     validate(value) {   
         
         if (value.toLowerCase().includes('password')) {       
             
             throw new Error('password contains "password')    
         
         }   
     }
 },
 age: {   
         
         type: Number ,
         default:0,
         validate(value){
              if(value<0){
                  throw new Error('age must be postive')
              }
         }
          
     } ,
s1:{
         type:Number,
         default:0,
         validate(value){
            if(value<0){
                throw new Error('marks must be postive')
            }
       }
     },
s2:{
        type:Number,
        default:0,
        validate(value){
           if(value<0){
               throw new Error('marks must be postive')
           }
      }

    }  
      
 }) 

 module.exports = User