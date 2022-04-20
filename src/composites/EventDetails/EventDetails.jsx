import React from 'react';
import { EventDetailCard } from '../../components';
import styles from './styles.module.css';

const EventDetails = ({ wedding }) => {
  const eventDetails = [
    {
      name: 'Akad Nikah',
      date: wedding.dateWedding,
      time: wedding.timeMarriageContract,
      venue: wedding.venue,
      address: wedding.locationMarriageContract,
    },
    {
      name: 'Resepsi Nikah',
      date: wedding.dateWedding,
      time: wedding.timeReception,
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
    </div>
  );
};

export default EventDetails;
