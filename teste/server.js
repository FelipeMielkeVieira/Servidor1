const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// app.use(function(req, res, next) {
//     console.log();
// })

const listaPessoas = [
    {
        id: 1,
        nome: "João",
    },
    {
        id: 2,
        nome: "Maria",
    },
    {
        id: 3,
        nome: "José",
    }
];

const listaUsuarios = [

];

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.get('/home', (req, res) => {
    res.send('Hello World home!')
})

app.get("/api/pessoas", (req, res) => {
    res.json(listaPessoas)
});

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    res.json(pessoa);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa);
})

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
})


app.get('/api/usuarios', (req, res) => {
    res.send(listaUsuarios);
})

app.post('/api/usuarios', (req, res) => {
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1
    listaUsuarios.push(usuario);
    res.json(usuario)
})

app.put('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    const index = listaUsuarios.findIndex(p => p.id == id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
    res.json(usuario);
})

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = listaUsuarios.find(p => p.id == id);
    res.json(usuario);
})

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios.splice(index, 1);
    res.json(listaUsuarios)
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});