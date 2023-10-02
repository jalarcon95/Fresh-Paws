const { Schema, model } = require('mongoose');
const Pet = require('./Pet');

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
        },
        pet: Pet,
        service: {
            type: String
        }
    }
);

// const Appointment = model('Appointment', appointmentSchema);

module.exports = appointmentSchema;