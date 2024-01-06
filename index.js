const express = require('express');
const user=require('./MOCK_DATA.json')
const app=express();
const port=7000;
app.get('/user',(req,res)=>{
    const html = `
    <ul>
    ${user.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})
app.get('/api/user',(req,res)=>{
    return res.json(user)
})
app
.route('/api/user/:id')
.get((req,res)=>{
    const id=Number(req.params.id)
    const users=user.find((user)=> user.id===id)
    return res.json(users)
})

app.listen(port,()=>
{
    console.log(`server started at port ${port}`)
})