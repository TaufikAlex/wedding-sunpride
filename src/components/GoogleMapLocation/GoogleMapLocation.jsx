import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Button } from '../../components';
import styles from './styles.module.css';

const GoogleMapLocation = ({ wedding }) => {
  return (
    <>
      <div className={styles.location}>
        <div>
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
        </div>
        <Button
          text="Google Maps"
          onClick={() => window.open(wedding.venueUrl)}
        />
      </div>
    </>
  );
};

export default GoogleMapLocation;
