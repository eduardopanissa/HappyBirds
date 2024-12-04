import express from "express";

const app = express()
const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1' 

const galerydb = [{
    tbuser:
           [{ id:"1", name:"Adriano", username: "Tomahok", password: "123456" },
            { id:"2", name: "André", username: "Toliba", password: "125644"   },
            { id:"3", name: "Eduardo", username: "Dudu", password: "124777"   }]
    },

    {tbgalery:
           [{ id:"1", title: "Space X", image: "rocket.png", description: "The image is the rocket came back to the earth" },
            { id:"2", title: "Boston Dinamic", image: "robot.png", description: "a robot humanoid learning cook" },
            { id:"3", title: "My Family", image: "IsabelPietroEduardo.png", description: "Dinner with my family" }]
    }
]

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
    console.log(typeof(req.params.id));
    const id = parseInt(req.params.id);
    console.log(typeof(id));

    

});

app.listen(PORT, () => {
    console.log(`app running at http://${HOSTNAME}:${PORT}`)
})



