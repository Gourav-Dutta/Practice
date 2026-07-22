import { prisma } from "../util/prisma.js";

export async function postUser(req, res){
    const user = await prisma.user.create({
        data: {
        name: "Gourav Dutta",
        email: "viva@example.com"
        }
    })
    return res.send(user);
}

export async function getUser(req, res){
    return res.send({
        msg: "User found"
    });
}