module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("Request", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
/**JOINS TO USER AND ITEM TABLE */

// Request.associate = (models) => {

//     //REQUEST BELONGS TO MANY USERS 
//     Request.belongsTo(models.User, {
//         foriegnKey: {
//             allowNull: true
//         }
//     });

//     //REQUEST BELONGS TO MANY ITEMS 
//     Request.belongsToMany(models.Item, {
//         foriegnKey: {
//             allowNull: true
//         }
//     });
// };

    return Request;
}