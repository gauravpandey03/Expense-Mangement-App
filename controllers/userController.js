// const userModel =require('./models/userModel')


// // login callback
// const loginController =async(res,req)=>{
//     try {
//         const {email, password}=req.body;
//        const user= await userModel.findOne({email,password})
//        if(!user){
//         res.status(404).send('user not found')
//        }
//        res.status(200).json({
//         success:false,
//         error,
//        });
//     } catch (error) {
//         res.status(400).json({
//             success :false,
//             error
//         })
//     }
// }

// // Register Callback 
// const registerController=async(req,res)=>{
// try {
//     const newUser=new userModel(req.body);
//     await newUser.save();
//     res.status(201).json({
//         success:true,
//         newUser,
//     });
// } catch (error) {
//     res.status(400).json({
//         success :false,
//         error
    
// })

// }
// };

// module.exports={loginController, registerController};



const userModel = require('../models/userModel');

// Login Controller
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Register Controller
const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({ success: true, newUser });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

module.exports = { loginController, registerController };
