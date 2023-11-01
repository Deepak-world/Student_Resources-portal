const mongoose = require("mongoose");

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
        required: true
    }
});

// Now we need to create a collection
const Register = mongoose.model("register", studentSchema);
module.exports = Register;
