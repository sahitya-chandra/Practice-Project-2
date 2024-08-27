import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import prisma from "../lib/prisma.js";


export const register = async (req, res) => {
    
    const {username, email, password} = req.body;
    try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("333")
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    })
    console.log(newUser);

    res.status(201).json({
        msg: "User created successfully"
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to create user!"})
    }
    
}

export const login = async (req, res) => {
    const {username, password} = req.body;

    try{

        const user = await prisma.user.findUnique({
            where: {
                username
            },
        })
        // console.log(user);
        if(!user) return res.status(401).json({ msg: "Invalid Credentials!"});

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) return res.status(401).json({msg: "Invalid Credentials!"});    

        // res.setHeader("Set-Cookie", "test=" + "myValue").json("success")
        const age = 1000 * 60 * 60 * 24 * 7;


        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET,
        {expiresIn: age}
        )

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
        })
        .status(200).json({msg: "Login Successful"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Failed to Login"})
    }
    
}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({msg: "Logout Successful"})
}