const express = require ('express')
const massive = require ('massive')
const controller = require ('./controller')
require('dotenv').config()
const app = express()

const {CONNECTION_STRING,SERVER_PORT} = process.env

massive(CONNECTION_STRING)
.then(db =>{
    app.set('db',db)
    console.log('Database connected')
})
.catch(err=>console.log(err))

app.use(express.json())

app.get("/api/housing",controller.add)
app.post("/api/housing",controller.read)
app.delete("/api/housing/:id",controller.destroy)


app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))