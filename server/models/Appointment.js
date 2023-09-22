const { Schema } = require('mongoose');

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