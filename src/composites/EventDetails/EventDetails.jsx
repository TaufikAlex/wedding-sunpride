import React from "react";
import { Button, EventDetailCard, GoogleMapLocation } from "../../components";
import styles from "./styles.module.css";

const EventDetails = ({ wedding }) => {
  const venueUrl =
    "https://www.google.com/maps/place/D'Sinta+Cafe+%26+Resto+Purwakarta/@-6.5938353,107.4768679,17z/data=!3m1!4b1!4m5!3m4!1s0x2e690fe2abdc1bfd:0x2ccaff4408edb905!8m2!3d-6.5938353!4d107.4790566";
  const eventDetails = [
    {
      name: "Akad Nikah",
      date: wedding.dateWedding,
      time: wedding.timeMarriageContract,
      venue: wedding.venue,
      address: wedding.locationMarriageContract,
    },
    {
      name: "Resepsi Nikah",
      date: wedding.dateWedding,
      time: wedding.timeReceptionhh,
      venue: wedding.venue,
      address: wedding.locationReception,
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div>
          <p className={styles.youThere}>WE WANT YOU THERE!</p>
          <p className={styles.joinUs}>Join our happy moment</p>
          <div className={styles.eventContainer}>
            {eventDetails.map((item, idx) => {
              return (
                <EventDetailCard
                  eventName={item.name}
                  eventDate={item.date}
                  eventTime={item.time}
                  eventVenue={item.venue}
                  venueAddress={item.address}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div>
          <GoogleMapLocation wedding={wedding} />
        </div>
        <Button text="Lihat lokasi" onClick={() => window.open(venueUrl)} />
      </div>
    </div>
  );
};

export default EventDetails;
