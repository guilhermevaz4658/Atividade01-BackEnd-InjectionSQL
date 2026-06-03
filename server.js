const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const conexao = require('./conexao.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/api/user/:email', async (req, res) => {
    const userEmail = req.params.email;
    try {
        const getUser = await conexao.query(
            "SELECT * FROM usuario WHERE email = '" + userEmail + "';"
        )
        res.send(getUser[0])
    } catch(err){
        console.log('Erro ao consultar MySQL:')
        console.log(err.message);
    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})