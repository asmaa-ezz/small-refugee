import React, { Component } from "react";
import styled from "styled-components";

const FooterBlack = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgb(0, 0, 0);
  position: absolute;
  bottom: 0;
}
`;

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <FooterBlack />
      </React.Fragment>
    );
  }
}

export default Footer;
