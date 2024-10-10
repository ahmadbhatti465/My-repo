import User from '../model/user.model.js';
import bcryptjs from 'bcrypt';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if the email field is provided and not null
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            fullname,
            email,
            password: hashPassword,
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const login=async (req,res)=>{
   try {
    const {email,password}=req.body;
    const user= await User.findOne({email});
    const isMatch=await bcryptjs.compare(password,user.password);
    if(!user || isMatch){
        res.status(400).json({message:"invalid cradations"});
    }else{
        res.status(200).json({message:"login successfully",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }});

    }
   } catch (error) {
    console.log("error", error.message);
    res.status(500).json({message:"inter server error"})
   }
}