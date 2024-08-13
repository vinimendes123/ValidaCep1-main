const{ Model, DataTypes} = require ('sequilize');

class Endereco extends Model {}

Endereco.init({
    Id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamps: true,
});

module.exports = Endereco;