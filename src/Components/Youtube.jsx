import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const Youtube = () => {
  return (
    <MDBContainer className="text-center">
      <MDBIframe src="https://www.youtube.com/embed/F1gL-3TkPB0" />
    </MDBContainer>
  );
};

export default Youtube;
