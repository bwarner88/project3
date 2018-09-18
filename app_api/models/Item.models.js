module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                len: [5]
            }
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            default: Date.now,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: true
        }
    });


    /**JOINS TO USER TABLE */
    Item.associate = (models) => {

//NOT SURE WHY THIS DOESN'T WORK

        // Item.hasMany(models.Transaction, {
        //     foriegnKey: {
        //         allowNull: true
        //     }
        // });

        // Item.hasMany(models.Request, {
        //     foriegnKey: {
        //         allowNull: true
        //     }
        // });

        // ITEM-USER ASSOCIATION
        Item.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        });

         
        // ITEM BELONGS TO MANY USER THROUGH REQUEST
        Item.belongsTo(models.Request, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH TRANSACTION
        Item.belongsTo(models.Transaction, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH ITEM-REVIEW
        Item.belongsTo(models.ItemReview, {
            foriegnKey: {
                allowNull: true
            }
        });
    };



    return Item;
};