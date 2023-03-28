import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { users } from "../../../db/db.js";

const secret = process.env.SECRET_KEY

function generateToken(playload) {
    return jwt.sign(playload, secret, {
        expiresIn: '30d'
    })
}

export function validate(email, password) {
    const user = validateEmail(users, email)
    if (!user) {
        throw new Error("This user does not exist!")
    }

    const compare = comparePassword(password, user)
    if (!compare) {
        throw new Error("Incorrect password!")
    }

    const foundUser = {
        id: user.id,
        email: user.email,
        password: user.password
    }
    const playload = {
        token: generateToken(foundUser),
        user: () => {
            delete foundUser.password;
            return foundUser
        } 
    }

    return playload
}


function validateEmail(users, email) {
    return users.find(element => element.email === email)
}


function comparePassword(password, user) {
    return bcrypt.compare(password, user.password)
}