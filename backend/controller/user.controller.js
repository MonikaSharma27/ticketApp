import userModel from './../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

 process.env.JWT_KEY;


export const signupUser = async (req, res) => {
    try {
      let { email, fullname, password } = req.body;
      let user = await userModel.findOne({ email });
      if (user) {
        res.status(401).send("You already have an account , please login")
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        let newUser = await userModel.create({ email, fullname, password: hash });
        await newUser.save();
        let token = jwt.sign({ email, id: newUser._id }, process.env.JWT_KEY)
        res.cookie("token", token);
        res.send(token);
      }
    } catch (err) {
      res.send(err.message)
    }
  };



  export const loginUser =async (req,res)=>{
    let {email, password}= req.body;
    console.log(email, password);
  
   let user = await userModel.findOne({email});
   if(!user){
    res.send("Email or password incorrect");
   } 
   bcrypt.compare(password, user.password, (err, result)=>{
    if(result){
      let token =jwt.sign({email, id:user._id}, process.env.JWT_KEY);
       res.cookie("token", token);
       res.send(token)
  
    }
    else{
      res.send("Please enter correct password");
    }
   });
  };


  
