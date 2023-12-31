const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true // Use "required" instead of "require"
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    RegdNumber: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
});

studentSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id);
        const token = jwt.sign({_id:this._id.toString}, process.env.SECRET_KEY);
        this.tokens =this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        res.send("the error part"+ error);
        console.log("the error part"+ error);
        
    }
}

// Now we need to create a collection
const Register = mongoose.model("register", studentSchema);
module.exports = Register;
