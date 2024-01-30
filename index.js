require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req,res) => {
res.send('Amankumar955')
})
app.get('/login',(req,res) =>{
res.send('<h1>hello bro see how i am learning backend</h1>')
})
app.get('/whatsapp',(req,res)=>{
    res.send('Damm killer bro Yo!!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})