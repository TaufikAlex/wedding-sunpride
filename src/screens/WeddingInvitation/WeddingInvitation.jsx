import React from "react";
import {
  WelcomePage,
  BrideGroom,
  EventDetails,
  CountdownTimer,
  TimelineContent,
  HealthProtocols,
  PictureGallery,
  ClosingPage,
  Footer,
} from "../../composites";

const WeddingInvitation = ({ wedding }) => {
  return (
    <div>
      <WelcomePage wedding={wedding} />
      <BrideGroom wedding={wedding} />
      <TimelineContent wedding={wedding} />
      <EventDetails wedding={wedding} />
      <CountdownTimer wedding={wedding} />
      <HealthProtocols />
      <PictureGallery />
      <ClosingPage wedding={wedding} />
      <Footer wedding={wedding} />
    </div>
  );
};

export default WeddingInvitation;
