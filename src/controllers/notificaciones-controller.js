const {userData} = require('../data/datas');

const obtenerNotificaciones= (req, res)=>{
    userData.obtenerNotificaciones((err,result)=>{
        if(err){
            console.error('error al obtener la notificacion', err.message);
            res.status(500).json({error: 'error al obtener la notificacion'});
            
        }else{
            res.status(200).json(result)
        }
    })
}

module.exports = obtenerNotificaciones;
