import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {
    try {

        const users = await prisma.user.findMany()
        res.status(200).json(users)

    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to get users!"})
    }
}

export const getUser = async (req, res) => {
    try {

        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(user)

    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to get user!"})
    }
}

export const updateUsers = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId
    const {password, ...inputs} = req.body

    if(id !== tokenUserId) {
        return res.status(403).json({msg:"Not Authorized"})
    }

    let updatedPassword = null
    try {

        if(password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }
        const updatedUser = await prisma.user.update({
            where: {id},
            data: {
                ...inputs,
                ...(updatedPassword && {password: updatedPassword})
            },
        }) 

        const {password: key , ...rest} = updatedUser
        res.status(200).json(rest)

    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to update users!"})
    }
}

export const deleteUsers = async (req, res) => {
    const id = req.params.id
    const tokenUserId = req.userId

    if(id !== tokenUserId) {
        return res.status(403).json({msg:"Not Authorized"})
    }

    try {

        await prisma.user.delete({
            where: {id},
        })

        res.status(200).json({msg: "User deleted"})

    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to delete users!"})
    }
}