module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    User.associate = function (models) {

        User.hasMany(models.Item, {
            onDelete: 'cascade'
        }); // END JOIN 


    }

    return User;
};