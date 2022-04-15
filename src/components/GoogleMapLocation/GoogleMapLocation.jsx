import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import styles from "./styles.module.css";

const GoogleMapLocation = ({ wedding }) => {
  return (
    <>
      <MapContainer
        className={styles.mapLocation}
        center={wedding.longLat}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={wedding.longLat}>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            {wedding.venue}
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  );
};

export default GoogleMapLocation;
