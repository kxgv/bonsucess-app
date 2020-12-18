import mongoose from 'mongoose';

/** 
 * @typedef {Object} User
 * @property {string} name - user name
 * @property {string} email - user email
 * @property {string} password - user password
 * @property {boolean} isAdmin - user is admin
*/
const userSchema = new mongoose.Schema(
    {
    name :{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password :{type: String, required: true}, 
    isAdmin: {type:Boolean, default: false, required: true}
    }, 
    {
        timestamps:true, 
    }
); 

const User = mongoose.model("User", userSchema); 
export default User; 