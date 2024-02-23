const mongoose = require('mongoose');


//schema design 
const userSchema = new mongoose.Schema({
    name:{
        typeof:String,
        require:[true,'name is require']
    },
    email:{
        type:String,
        required:[true,'email is require and should be unique'],
        unique:true,
    }, 
    password:{
        type:String,
        require:[true,"Password is require"],
    },

},
{timestamps: true}
);

//export 
const userModel = mongoose.model('user',userSchema)
module.exports=userModel;