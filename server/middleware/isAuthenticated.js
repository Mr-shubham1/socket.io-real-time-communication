import jwt from "jsonwebtoken"

export const isAuthenticated = (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.json({
                success:false,
                message:"user not Authinticated"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.json({
                success:false,
                message:"invalid token"
            })
        }
        req.userId = decoded.userId;
        next();
        
    } catch (error) {
        console.log("catch error in isAunthicated ",error);
    }
    

}