import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function AppointmentForm() {
    const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT);
    const { data, loading } = useQuery(GET_ME);
    const pets = data?.me.pets || [];
    console.log(pets);
    const [petId, setPetId] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("08:00:00");
    const { state } = useLocation();
    console.log(petId, date, time);

    //   const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addAppointment({
                variables: {
                    newAppointment: {
                        petId,
                        date,
                        time,
                        service: state.service
                    }
                },
            });
            console.log(data);
            window.location.assign("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    if (error) return <h2>{error.message}</h2>;
    return (
        <Box sx={{display: "flex", justifyContent: "center", textAlign: "left"}}>
            <form>
                <label htmlFor="petDropdown">Select a Pet: </label>
                <select id="petDropdown" value={pets} onChange={(event) => setPetId(event.target.value)}>
                    <option value=""> Pet</option>
                    {pets.map((pet, index) => (
                        <option key={index} value={pet._id}>
                            {pet.name}
                        </option>
                    ))}
                </select>

                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        minDate={dayjs().add(1, "day")}
                        label="Date"
                        value={dayjs(date)}
                        onChange={(newValue) => setDate(newValue)}
                    />
                </LocalizationProvider>
                <br />

                <FormControl sx={{ minWidth: 120, my: 2 }} size="small">
                    <InputLabel id="time-select">Time</InputLabel>
                    <Select
                        labelId="time-select"
                        id="time-select"
                        value={time}
                        label="Time"
                        onChange={(event) => setTime(event.target.value)}
                        name="time"
                    >
                        <MenuItem value={`08:00AM`}>8:00am</MenuItem>
                        <MenuItem value={`08:30AM`}>8:30am</MenuItem>
                        <MenuItem value={`09:00AM`}>9:00am</MenuItem>
                        <MenuItem value={`09:30AM`}>9:30am</MenuItem>
                        <MenuItem value={`10:00AM`}>10:00am</MenuItem>
                        <MenuItem value={`10:30AM`}>10:30am</MenuItem>
                        <MenuItem value={`11:00AM`}>11:00am</MenuItem>
                        <MenuItem value={`12:00PM`}>12:00pm</MenuItem>
                        <MenuItem value={`12:30PM`}>12:30pm</MenuItem>
                        <MenuItem value={`1:00PM`}>1:00pm</MenuItem>
                        <MenuItem value={`1:30PM`}>1:30pm</MenuItem>
                        <MenuItem value={`2:00PM`}>2:00pm</MenuItem>
                        <MenuItem value={`2:30PM`}>2:30pm</MenuItem>
                        <MenuItem value={`3:00PM`}>3:00pm</MenuItem>
                        <MenuItem value={`3:30PM`}>3:30pm</MenuItem>
                        <MenuItem value={`4:00PM`}>4:00pm</MenuItem>
                        <MenuItem value={`4:30PM`}>4:30pm</MenuItem>
                    </Select>
                </FormControl>

                <br />

                {/* <label>Select Service</label>
                <br />
                <textarea
                    type="text"
                    placeholder="What service would you like?"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    name="workRequest"
                    rows="6"
                    cols="70"
                ></textarea> */}

                <br />

                <button sx={{ mt: 3 }} type="submit" onClick={handleSubmit} className='hoverButton'>
                    Request Appointment
                </button>
            </form>
        </ Box>
    );
}

export default AppointmentForm;