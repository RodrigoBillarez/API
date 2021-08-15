const Usuarios = require('../models/Usuarios');

//agregar usuario
exports.add = async(req, res) =>{
    const usuario = new Usuarios(req.body);
    try{
        await usuario.save();
        res.json({ message: 'Nuevo usuario agregado'});
    }catch (error){
        console.log(error);
        res.send(error);
        next();


    }
};


//primera accion: list
exports.list = async (req, res) => {
    try{
     const usuarios = await Usuarios.find({});
     res.json(usuarios);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};


//leer usuario por id
exports.show = async (req, res, next) => {
    try{
        const usuario = await Usuarios.findById(req.params.id);
        if(!usuario){
            res.status(404).json({
                message: 'El usuario no existe'
            });
        }
        
        res.json(usuario);
    }catch (error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}


//Modificar usuario
exports.update = async (req, res, next) =>{
    try{
       const usuario = await Usuarios.findByIdAndUpdate(
           {_id: req.params.id},
           req.body,
           { new: true}
       );
       res.json({
           message: 'Usuario modificado correctamente'
       });
    }catch (error){
     res.status(400).json({
         message: 'Error al procesar la peticion'
     });
    }
}

//Eliminar usuario
exports.delete = async (req, res, next) =>{
    try{
      await Usuarios.findOneAndDelete({ _id: req.params.id });
      res.json({ message: 'El usuario ha sido eliminado'});
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });

    }
}