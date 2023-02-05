import React from "react";

function GMap() {
  return (
    <iframe
      style={{
        borderRadius: "20px",
        boxShadow: "0 0 30px 0px lightgrey",
      }}
      className="gmap_iframe"
      width="400px"
      height="250px"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bishkek, Shopokov 101/1&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      title="googleMap"
    ></iframe>
  );
}

export default GMap;
