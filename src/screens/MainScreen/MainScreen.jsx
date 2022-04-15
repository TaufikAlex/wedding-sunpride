import React, { useState } from "react";
import { FrontPageInvitation, WeddingInvitation } from "../";
import { PlaySong } from "../../components";
import DataWedding from "./data";

const MainScreen = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);
  const { wedding } = DataWedding();

  const renderInvitation = () => (
    <>
      {isInvitationOpen ? (
        <>
          <PlaySong isInvitationOpen={isInvitationOpen} />
          <WeddingInvitation wedding={wedding} />
        </>
      ) : (
        <FrontPageInvitation
          setInvitationOpen={setInvitationOpen}
          wedding={wedding}
        />
      )}
    </>
  );

  return <>{renderInvitation()}</>;
};

export default MainScreen;
