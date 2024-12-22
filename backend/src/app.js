import express from "express";

import cors from 'cors';

const app = express()
const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1'

const galerydb = [{
    tbuser:
        [{ id: "1", name: "Adriano", username: "Tomahok", password: "123456" },
        { id: "2", name: "André", username: "Toliba", password: "125644" },
        { id: "3", name: "Eduardo", username: "Dudu", password: "124777" }]
},

{
    tbgalery:
        [{ id: "1", title: "Space X", image: "https://img.freepik.com/fotos-gratis/abelharucos-coloridos-compartilhando-comida-no-galho-da-arvore_181624-29847.jpg?t=st=1734524933~exp=1734528533~hmac=2d3c72a834e817fba5a2a57c5d29f3869839de5de88c580a4959db9d94749b1a&w=996", description: "The image is the rocket came back to the earth" },
        { id: "2", title: "Boston Dinamic", image: "https://img.freepik.com/fotos-gratis/abelharucos-com-penas-multicoloridas-sentados-no-galho-de-uma-arvore_181624-30537.jpg?t=st=1734525001~exp=1734528601~hmac=7a4877eb853f4c50f895e68c2f316f14a922a154d5ef983d32733c4cc26ba2eb&w=1060", description: "a robot humanoid learning cook with happyBirds" },
        { id: "3", title: "My Family", image: "https://img.freepik.com/fotos-gratis/close-de-um-abelharuco-em-um-galho-de-arvore-sob-a-luz-do-sol_181624-21543.jpg?t=st=1734525027~exp=1734528627~hmac=eec429487ebb98cea46dc0204c487c82b70e415c80026912959e4aca1684a49c&w=996", description: "Dinner with my family, and drink a beer" }]
}
];

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
    res.status(201).send('Hello API!');
});


app.get('/api/users', (req, res) => {
    res.status(201).send(galerydb[0]);
});


app.get('/api/users/:id/:password/:username', (req, res) => {
    //res.status(201).send()
    console.log(req.params.id);
})


app.get('/api/pictures', (req, res) => {
    res.status(201).send(galerydb[1])
})


app.get('/api/pictures/:id', (req, res) => {
    console.log(typeof (req.params.id));
    const id = parseInt(req.params.id);
    console.log(typeof (id));



});

app.listen(PORT, () => {
    console.log(`app running at http://${HOSTNAME}:${PORT}`)
})



