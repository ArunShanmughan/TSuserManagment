
import { Request,Response,NextFunction } from "express";

const isAdmin = async(req:any, res:any, next:NextFunction)=>{
  if(req.session?.adminLoginSession){
    next()
  }else{
    return res.redirect("/adminLogin")
  }
}

export default isAdmin;