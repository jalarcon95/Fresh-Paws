const { Schema, model } = require('mongoose');

//import schema Appointment.js
const appointmentSchema = require('./Appointment');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        species: {
            type: String,
            required: true,
        },
        vaccine: {
            type: Boolean,
        },
        description: {
            type: String,
        },
        // set appointment to be an array of data that adheres to the appointmentSchema
        appointment: [appointmentSchema],
    });

const Pet = model('Pet', petSchema);

module.exports = Pet;
