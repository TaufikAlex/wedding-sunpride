import React from "react";
import { GoogleMapLocation } from "../../components";
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
} from "../../composites";
// import ReactPageScroller from "react-page-scroller";

const WeddingInvitation = ({ wedding }) => {
  // const [state, setState] = useState(0);

  return (
    <>
      {/* <ReactPageScroller
        pageOnChange={(page) => setState(page)}
        customPageNumber={state}
      > */}
      <WelcomePage wedding={wedding} />
      <BrideGroom wedding={wedding} />

      <TimelineContent wedding={wedding} />

      <EventDetails wedding={wedding} />
      <GoogleMapLocation wedding={wedding} />
      <CountdownTimer wedding={wedding} />
      <HealthProtocols />

      <PictureGallery />
      <ClosingPage wedding={wedding} />
      <p></p>
      {/* </ReactPageScroller> */}
      {/* {state >= 8 && <Footer wedding={wedding} />} */}
      <Footer wedding={wedding} />
    </>
  );
};

export default WeddingInvitation;
