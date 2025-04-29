import mongoose from "mongoose";
import User from "../model/user.model.js";


export const signupUser = async (req,res)=>{
    const {name,email,dob,gender,phone,status}= req.body;

    const user = await User.create()
}

export const loginUser= async(req,res)=>{

}

export const updateUser= async(req,res)=>{
    
}

export const logoutUser= async(req,res)=>{
    
}

export const deleteUser= async(req,res)=>{
    
}