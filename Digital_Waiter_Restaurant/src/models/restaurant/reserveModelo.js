const reserve = (sequelize, type)=>{
    return sequelize.define('reserves', {
        idReserve: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
    })
}