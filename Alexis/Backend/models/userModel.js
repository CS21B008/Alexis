const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,                                  
   
    email: String,
    password: String,
    address: String,
    UserId: {
        type: String,
        required: true,
        unique: true,
    },
    Gender: String,
    Age: Number,
    IsMedical_professional:String
})


userSchema.methods.matchPassword = async function (enteredPassword) {
    return enteredPassword === this.password;
}

const User = mongoose.model("User", userSchema);
module.exports = User;