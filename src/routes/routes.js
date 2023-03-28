import {validate} from "../app/utils/auth/auth.js"

export const routes = [
    {
        path: "/auth",
        component: validate,
        type: 'post'
    },
    {
        path: "/hello",
        component: (req, res) => { res.json({hello: 'hello world!'}) },
        type: 'get'
    }
]