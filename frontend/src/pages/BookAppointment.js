import React, { useState } from "react";
import { bookAppointment } from "../api/api";

const BookAppointment = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", time: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookAppointment(formData);
    alert("Appointment booked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      <input type="time" onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookAppointment;
