import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) return res.status(401).json({msg: "Not Authenticated"})

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if(err) return res.status(403).json({msg: "Token is not Valid!"})
        console.log(payload);
        req.userId = payload.id
        
        next();
    })

    
}