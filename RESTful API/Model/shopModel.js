const mongoose = require("mongoose");
const shopSchema = new mongoose.Schema({
    item_name: {
        required: true,
        unique: true,
        type: String,
    },
    item_standard_price: {
        required: true,
        type: Number,
    },
    item_new_price: {
        required: false,
        type: Number,
    },
    item_description: {
        required: true,
        type: String,
    },
    shipping: {
        required: true,
        type: Number,
    },
    category: {
        required: true,
        type: String,
    },
    photo: {
        required: true,
        type: String,
    },
    trending: {
        required: true,
        type: Boolean,
    },
},
{
    versionKey:false,
}
);

module.exports = mongoose.model("shop", shopSchema);