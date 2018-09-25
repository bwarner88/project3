module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        location: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validation: {
                len: [5]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            default: Date.now,
            allowNull: true
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            default: true
        }
    });


    /**JOINS TO USER TABLE */
    Item.associate = (models) => {

        // ITEM-USER ASSOCIATION
        Item.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        });

         
        // ITEM BELONGS TO MANY USER THROUGH REQUEST
        Item.hasMany(models.Request, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH TRANSACTION
        Item.hasMany(models.Transaction, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH ITEM-REVIEW
        Item.hasMany(models.ItemReview, {
            foriegnKey: {
                allowNull: true
            }
        });
    };



    return Item;
};