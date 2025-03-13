import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
     fullname: String,
     email:String,
     password:String,
     
}
);
const users = mongoose.model("Users", userSchema)
export default users;