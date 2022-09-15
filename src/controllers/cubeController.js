const router = require('express').Router();
const fs = require('fs/promises')
const cubes = require('../db.json');
const path = require('path')

router.get('/create', (req, res)=> {
    res.render('create')
});

router.post('/create', (req, res)=>{
    const cube = req.body;

    if(cube.length < 2){
        return res.status(400).send('Invalid request');
    }

    cubes.push(cube);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), {encoding: 'utf-8'})
    .then(()=> {
        res.redirect('/');
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

module.exports = router;