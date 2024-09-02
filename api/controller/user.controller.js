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

export const savePost = async (req, res) => {

    const postId = req.body.postId
    const tokenUserId = req.userId

    try {

        const savedPost = await prisma.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId
                }
            }
        });

        if(savedPost) {
            await prisma.savedPost.delete({
                where: {
                    id: savedPost.id,
                }
            })
            res.status(200).json({msg: "Post deleted"})
        } else {
            await prisma.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId
                }
            })
            res.status(200).json({msg: "Post Saved"})
        }

        res.status(200).json({msg: "Post Saved"})
    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to save post!"})
    }
} 

export const profilePosts = async (req, res) => {
    const tokenUserId = req.params.userId
    try {

        const userPosts = await prisma.post.findUnique({
            where: {
                userId: tokenUserId
            }
        })

        const saved = await prisma.savedPost.findUnique({
            where: {
                userId: tokenUserId
            },
            include: {
                post: true
            }
        })

        const savedPosts = saved.map(item=> item.post)
        res.status(200).json({userPosts, savePosts})

    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Failed to get profile posts!"})
    }
}