import express from "express";
import pictures from "./picturesRoutes.js"
import users from "./usersRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Welcome to Happy Birds"})
    })

    app.use(
        express.json(),
        pictures,
        users
    )
}

export default routes;