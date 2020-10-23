//importar el modelo
const Model = require('../Models/Model')

//Controlador
const Controller = {
    //Metodos
    home: (req , res)=>{
        res.status(200).send('Soy el index del sitio')
    },
    guardarTurno: async (req, res, next)=>{
        //Metodo que guarda los turnos en la base de datos ( requerir bodyparser en index.js) 
        const Proyecto = new Model(req.body)//Instanciar un nuevo schema/modelo de la ddb y pasarle los argumentos
        try{
            await Proyecto.save()
            res.json({Proyecto})
        }catch(err){
            console.log(err)
            //Por cualqueir error, que no se quede planchado y avance
            next();
        }
    },
    listarTurnos: async (req ,res, next)=>{
        //Metodo que se trae los turnos de la base de datos
        try{
            const Turnos = await Model.find({})
            res.json({Turnos}) 
        }catch(err){
            console.log(err)
            next();
        }
    },
    listarTurno: async (req ,res , next)=>{
        //Metodo para listar turnos indiviudualmente por id
        const idTurno = req.params.id
        try{
            const Turno = await Model.findById(idTurno)
            res.json({Turno})
        }catch(err){
            console.log(err)
            next();
        }
    },
    eliminarTurno: async (req ,res)=>{
        //Metodo que borra los turnos de la base de datos
        const idTurno = req.params.id
        try{
            const turnoEliminiad = await Model.findByIdAndRemove(idTurno)
            res.json({turnoEliminiad});
        }catch(err){
            console.log(err)
        }
    },
    editarTurno: async (req , res )=>{
        //Metodo que borra los turnos de la base de datos ( metodo distinto a try/catch )
        const idTurno = req.params.id
        const bodyTurno = req.body
        await Model.findByIdAndUpdate(idTurno , bodyTurno , {new: true}, (err , turnoEditado) =>{
            if(err) return res.status(500).send({message: 'Error al actualizar'})
            if(!turnoEditado) return res.status(404).send({message: 'No se puede editar'})
            return res.status(200).send({turnoEditado})
        })
    },
};

//Exportar hacia el sistema de ruteo
module.exports = Controller;