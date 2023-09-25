const { Schema } = require('mongoose');

//MIGHT NEED TO ADD appointmentId FIELD
const appointmentSchema = new Schema(
    {
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    }
);

module.exports = appointmentSchema;