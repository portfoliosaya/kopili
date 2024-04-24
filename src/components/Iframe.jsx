import React from "react";
import "../components/Iframe.css";

const MapLocation = () => {
  return (
    <div className="midle">
      <iframe
        title="Map Location"
        width="600"
        height="300"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.482553659934!2d104.76710890955347!3d-2.963520239745066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7764b031a7c1%3A0x3640bb0024448d54!2sVellyZhu%20Beauty%20Studio%20Cabang%20M%20Isa!5e0!3m2!1sid!2sid!4v1713625031957!5m2!1sid!2sid"
      ></iframe>
    </div>
  );
};

export default MapLocation;
