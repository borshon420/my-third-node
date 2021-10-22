const express = require('express')
const app = express()
const port = 5000;

const users = [
    {id: 0, name:"Alia", email:"Alia@gmail.com", phone:"01328888"},
    {id: 1, name:"Shonakkhi", email:"Shonakkhi@gmail.com", phone:"01328888"},
    {id: 2, name:"Tapsi", email:"Tapsi@gmail.com", phone:"01328888"},
    {id: 3, name:"Sunny", email:"Sunny@gmail.com", phone:"01328888"},
    {id: 4, name:"Karina", email:"Karina@gmail.com", phone:"01328888"},
    {id: 5, name:"Noorafati", email:"Noorafati@gmail.com", phone:"01328888"}
]

app.get('/', (req, res)=> {
    res.send('Rolo, Hello From my third node')
})

app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    console.log(search)
    
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
    // console.log(id)
    // console.log(user) 
})

app.listen(port, () => {
    console.log('listning the port', port)
})