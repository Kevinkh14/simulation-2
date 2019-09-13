let houses = []
// get sql to work
const add = (req,res)=>{
    houses.push(req.body)
    res.json(houses)
    res.status(200)
    const db =req.app.get('db')
    const{property_name,adress,city,state,zip}=req.body

    db.create([property_name,adress,city,state,zip])
    .then(()=>res.sendStatus(200))
    .catch(err=>{res.sendStatus(500)})
}
const read =(req,res)=>{
    res.json(houses)

    const db =req.app.get('db')

    db.read()
    .then(houses => res.status(200).send(houses))
    .catch(err =>{res.SendStatus(500)})
}
const destroy = (req,res)=>{
    houses.splice(+req.params.id,1)
    res.json(houses)

    const db =req.app.get('db')
    const{id}=req.params

    db.delete(id)
    .then(()=>res.sendStatus(200))
    .catch(err=>{res.sendStatus(500)})
}

module.exports={
    add,
    read,
    destroy
}