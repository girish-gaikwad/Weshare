import jwt from "jsonwebtoken";

export const VerifyToken =(req,res,next) =>{
    
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({ success: false, message: "UnAuthorized -  No token provided" });
    }
    try {
     const decode = jwt.verify(token,process.env.JWT_SECRET)
     
    if(!decode) res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
     req.userId = decode.userId;
     next();
    } catch (error) {
        console.error("Error in verifying token",error);
        return res.status(500).json({ success: false, message: "Server error"} );
    }
}

