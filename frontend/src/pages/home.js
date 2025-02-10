import React, { useEffect, useState } from "react";
import { getSlots } from "../api/api";

const Home = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    getSlots().then((res) => setSlots(res.data));
  }, []);

  return (
    <div>
      <h2>Available Slots</h2>
      {slots.map((slot) => (
        <div key={slot.id}>
          {slot.date} at {slot.time}
        </div>
      ))}
    </div>
  );
};

export default Home;
