const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: mongoose.SchemaTypes.String,
    performance: mongoose.SchemaTypes.String,
    date1: mongoose.SchemaTypes.Number


});

module.exports = mongoose.model("arlo", UserSchema);
