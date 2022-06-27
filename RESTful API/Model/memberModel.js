const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        unique: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    twitch_account: {
        required: true,
        type: String,
    },
    photo: {
        required: true,
        type: String,
    },
    birth_day: {
        required: true,
        type: Number,
    },
    birth_month: {
        required: true,
        type: Number,
    },
    birth_year: {
        required: true,
        type: Number,
    },
},
{
    versionKey:false,
}
);

module.exports = mongoose.model("member", memberSchema);