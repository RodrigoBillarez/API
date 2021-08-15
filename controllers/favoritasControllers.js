const Favoritas = require ('../models/Favoritas');


//Agregar favorita
exports.add = async (req, res, next) =>{
    try{
       const favorita = new Favoritas (req.body);
       await favorita.save();
       res.json(favorita)
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });

    }
}

//Mostrar favorita
exports.list = async (req, res, next) =>{
    try{
      const favoritas = await Favoritas.find({})
      .populate('Usuarios')
      .populate({
          path: 'canciones.cancion',
          model: 'Canciones'
      });
      res.json(favoritas);
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}

//Eliminar favorita
exports.delete = async (req , res , next) =>{
    try{
      await Favoritas.findOneAndDelete({ _id: req.params.id});
      res.json({ message: 'Favorita eliminada'});
    }catch(error){
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}