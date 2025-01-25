import express from "express";

const router = express.Router();

const users = [
    { id: "1", name: "Adriano", username: "Tomahok", password: "123456" },
    { id: "2", name: "André", username: "Toliba", password: "125644" },
    { id: "3", name: "Eduardo", username: "Dudu", password: "124777" }]

router
    .get('/api/users', (req, res) => {
        res.status(200).json(users);
    })
    .get('/api/users/:id/:password/:username', (req, res) => {
        //res.status(201).send()
        console.log(req.params.id);
    })

export default router;