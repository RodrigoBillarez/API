const Canciones = require('../models/Canciones');

//agregar cancion
exports.add = async(req, res) =>{
    const cancion = new Canciones(req.body);
    try{
        await cancion.save();
        res.json({ message: 'Nueva cancion agregada'});
    }catch (error){
        console.log(error);
        res.send(error);
        next();


    }
};


//primera accion: list
exports.list = async (req, res) => {
    try{
     const canciones = await Canciones.find({});
     res.json(canciones);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};


//leer cancion por id
exports.show = async (req, res, next) => {
    try{
        const cancion = await Canciones.findById(req.params.id);
        if(!cancion){
            res.status(404).json({
                message: 'La cancion no existe'
            });
        }
        
        res.json(cancion);
    }catch (error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}


//Modificar cancion
exports.update = async (req, res, next) =>{
    try{
       const cancion = await Canciones.findByIdAndUpdate(
           {_id: req.params.id},
           req.body,
           { new: true}
       );
       res.json({
           message: 'Cancion modificada correctamente'
       });
    }catch (error){
     res.status(400).json({
         message: 'Error al procesar la peticion'
     });
    }
}

//Eliminar cancion
exports.delete = async (req, res, next) =>{
    try{
      await Canciones.findOneAndDelete({ _id: req.params.id });
      res.json({ message: 'La cancion ha sido eliminado'});
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });

    }
}