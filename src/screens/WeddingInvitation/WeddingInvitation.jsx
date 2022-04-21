import React from 'react';
import { GoogleMapLocation } from '../../components';
import {
  BrideGroom,
  ClosingPage,
  CountdownTimer,
  EventDetails,
  Footer,
  HealthProtocols,
  PictureGallery,
  TimelineContent,
  WelcomePage,
} from '../../composites';

const WeddingInvitation = ({ wedding }) => {
  return (
    <div>
      <WelcomePage wedding={wedding} />
      <BrideGroom wedding={wedding} />
      <TimelineContent wedding={wedding} />
      <EventDetails wedding={wedding} />
      <GoogleMapLocation wedding={wedding} />
      <CountdownTimer wedding={wedding} />
      <HealthProtocols />
      <PictureGallery />
      <ClosingPage wedding={wedding} />
      <Footer wedding={wedding} />
    </div>
  );
};

export default WeddingInvitation;
