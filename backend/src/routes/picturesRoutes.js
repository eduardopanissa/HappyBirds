import express from "express";

const router = express.Router();


const gallery = 
    [{ id: "1", title: "Space X", image: "https://img.freepik.com/fotos-gratis/abelharucos-coloridos-compartilhando-comida-no-galho-da-arvore_181624-29847.jpg?t=st=1734524933~exp=1734528533~hmac=2d3c72a834e817fba5a2a57c5d29f3869839de5de88c580a4959db9d94749b1a&w=996", description: "The image is the rocket came back to the earth" },
    { id: "2", title: "Boston Dinamic", image: "https://img.freepik.com/fotos-gratis/abelharucos-com-penas-multicoloridas-sentados-no-galho-de-uma-arvore_181624-30537.jpg?t=st=1734525001~exp=1734528601~hmac=7a4877eb853f4c50f895e68c2f316f14a922a154d5ef983d32733c4cc26ba2eb&w=1060", description: "a robot humanoid learning cook with happyBirds" },
    { id: "3", title: "My Family", image: "https://img.freepik.com/fotos-gratis/close-de-um-abelharuco-em-um-galho-de-arvore-sob-a-luz-do-sol_181624-21543.jpg?t=st=1734525027~exp=1734528627~hmac=eec429487ebb98cea46dc0204c487c82b70e415c80026912959e4aca1684a49c&w=996", description: "Dinner with my family, and drink a beer" }]

function buscaImagem(id) {
    return gallery.findIndex(picture => {
        return picture.id === id;
    })
    }

router
    .get('/api/pictures', (req, res) => {
        res.status(201).json(gallery);
    })
    .get('/api/pictures/:id', (req, res) => {
        const index = buscaImagem(req.params.id);
        res.status(200).json(gallery[index]);
    })
    .post('/api/pictures', (req, res) => {
        gallery.push(req.body);
        res.status(201).send("registro cadastrado com sucesso");
    })
    .put('/api/pictures/:id', (req, res) => {
        const index = buscaImagem(req.params.id);
        gallery[index].title = req.body.title;
        res.status(200).json(gallery);
    })

export default router;