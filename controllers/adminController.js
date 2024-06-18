import { Admin } from "../model/admin.schema";

export const adminController ={

        async storeAdmin(req,res,next){
            try{
        const{name,email,age}=req.body;
      const data= await Admin.create(name,email,age);
       res.status(201).json(data)   
    }
    catch(err){
        res.status(401).json({err:"server error", serverError:err})
    }
}
}