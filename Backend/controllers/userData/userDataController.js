import ExpenseTracker from '../../models/userData.js';
import bcrypt from  'bcryptjs';
import jwt from 'jsonwebtoken';


export const entries = async (req, res) => {
    try{
        const { name } = req.body;
        const { email } = req.body;
        
        const user = await ExpenseTracker.findOne({ 'user.email' : email });
        
        if(!name) return res.status(400).json({error : "required field is missing or not passed", fieldName : "name"});
        return res.status(200).json(user);
    }catch(err){
         res.status(500).json({ message: err.message });
    }
}