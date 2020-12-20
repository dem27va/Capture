import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAbout className="about">
      <StyledDescription className="description">
        <div className="title">
          <StyledHide className="hide">
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photograpy or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  /* border: 1px solid red; */
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
