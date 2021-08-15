const express = require ('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosControllers');
const cancionesController = require('../controllers/cancionesControllers');
const favoritasController = require('../controllers/favoritasControllers');

module.exports = function(){
    //post: /usuarios
    router.post('/usuarios',usuariosController.add);    
    //get: /usuarios
    router.get('/usuarios',usuariosController.list);
    //leer usuarios
    //get: /usuarios/:id
    router.get('/usuarios/:id', usuariosController.show);
    //Modificar usuarios
    // put: /usuarios/:id
    router.put('/usuarios/:id', usuariosController.update);
    //Borrar usuarios
    //delete: /usuarios/:id
    router.delete('/usuarios/:id', usuariosController.delete);


    //Canciones
    //post: /canciones
    router.post('/canciones',cancionesController.add);
    //get: /canciones
    router.get('/canciones',cancionesController.list);
    //leer canciones
    //get: /canciones/:id
    router.get('/canciones/:id',cancionesController.show);
    //Modificar Canciones
    // put: /canciones/:id
    router.put('/canciones/:id', cancionesController.update);
    //Borrar Canciones
    //delete: /canciones/:id
    router.delete('/canciones/:id',cancionesController.delete);


    //Favoritas
    //post: /favoritas
    router.post('/favoritas',favoritasController.add);
    //get: /favoritas
    router.get('/favoritas',favoritasController.list);
    //delete: /favoritas
    router.delete('/favoritas/:id',favoritasController.delete);











    return router;
}

