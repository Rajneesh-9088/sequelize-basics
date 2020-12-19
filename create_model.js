const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb1','sampleuser1','samplepass1',{
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('student', {
    // name: DataTypes.STRING(40),
    // age: DataTypes.INTEGER(2)
    

})
db.sync()
.then(()=>console.log('Database synchronised'))
.catch((err)=> console.err(err));