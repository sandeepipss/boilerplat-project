import React from "react";
//import Carousel from "./Carousel.js";
import Youtube from "./Youtube.jsx";
import "../App.css";

import Button from "react-bootstrap/Button";

//import { makeStyles } from "@material-ui/core/styles";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Home() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <h2>Why Oriflame?</h2>
            <p>
              For over 50 years, Oriflame has been empowering people to make a
              change in their lives by recommending and selling high quality
              beauty products inspired by nature and powered by Swedish science.
              Oriflame is Europe’s largest beauty company selling direct with a
              global community of over 3 million independent sales consultants
              around the world.
            </p>
            <h3>WHAT'S IN IT FOR YOU?</h3>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="justify-content-md-center">
              <div>
                <article ClassName="benefit-content benefit-active">
                  <div ClassName="benefit-header">
                    <img
                      data-src="https://media-asia-cdn.oriflame.com/-/media/IN/Images/rupee-symbol-business-opportunity.ashx?h=90&amp;la=en-IN&amp;w=90&amp;u=1901020928&amp;imageFormat=Jpeg&amp;q=70"
                      ClassName="benefit-icon lazy-loaded"
                      src="https://media-asia-cdn.oriflame.com/-/media/IN/Images/rupee-symbol-business-opportunity.ashx?h=90&amp;la=en-IN&amp;w=90&amp;u=1901020928&amp;imageFormat=Jpeg&amp;q=70"
                      alt=""
                    ></img>
                    <noscript>
                      <img
                        src="https://media-asia-cdn.oriflame.com/-/media/IN/Images/rupee-symbol-business-opportunity.ashx?h=90&la=en-IN&w=90&u=1901020928&imageFormat=Jpeg&q=70"
                        alt=""
                      ></img>
                    </noscript>{" "}
                    <h3 ClassName="benefit-title">INCOME &amp; FLEXIBILITY</h3>
                  </div>

                  <div ClassName="benefit-annotation">
                    <div ClassName="content">
                      With Oriflame you are your own boss, work with beauty,
                      manage your own time and earn extra income.
                    </div>
                  </div>
                </article>
              </div>
            </Col>
            <Col className="justify-content-md-center">
              <div>
                <article ClassName="benefit-content benefit-active">
                  <div ClassName="benefit-header">
                    <img
                      data-src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Travel.ashx?h=90&amp;la=en-IN&amp;w=90&amp;u=0101010000&amp;imageFormat=Jpeg&amp;q=70"
                      ClassName="benefit-icon lazy-loaded"
                      src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Travel.ashx?h=90&amp;la=en-IN&amp;w=90&amp;u=0101010000&amp;imageFormat=Jpeg&amp;q=70"
                      alt=""
                    ></img>
                    <noscript>
                      <img
                        src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Travel.ashx?h=90&la=en-IN&w=90&u=0101010000&imageFormat=Jpeg&q=70"
                        alt=""
                      ></img>
                    </noscript>{" "}
                    <h3 ClassName="benefit-title">TRAVEL &amp; CELEBRATE</h3>
                  </div>

                  <div ClassName="benefit-annotation">
                    <div ClassName="content">
                      Your achievements should never go unrecognised! We reward
                      success with exciting events all over the world.
                    </div>
                  </div>
                </article>
              </div>
            </Col>
            <Col className="justify-content-md-center">
              <div>
                <article ClassName="benefit-content benefit-active">
                  <div ClassName="benefit-header">
                    <img
                      data-src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Community.ashx?h=300&amp;la=en-IN&amp;w=300&amp;u=0101010000&amp;imageFormat=Jpeg&amp;q=70"
                      class="benefit-icon lazy-loaded"
                      alt=""
                      title=""
                      width="90"
                      height="90"
                      src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Community.ashx?h=300&amp;la=en-IN&amp;w=300&amp;u=0101010000&amp;imageFormat=Jpeg&amp;q=70"
                    ></img>
                    <noscript>
                      <img
                        src="https://media-asia-cdn.oriflame.com/-/media/Images/Business-Opportunity/BenefitArea/H_Community.ashx?h=300&la=en-IN&w=300&u=0101010000&imageFormat=Jpeg&q=70"
                        alt=""
                      ></img>
                    </noscript>{" "}
                    <h3 ClassName="benefit-title">GLOBAL BEAUTY COMMUNITY</h3>
                  </div>

                  <div ClassName="benefit-annotation">
                    <div ClassName="content">
                      Be a part of something bigger together with amazing people
                      from all over the world.
                    </div>
                  </div>
                </article>
              </div>
            </Col>
          </Row>

          <div className="justify-content-md-center">
            <h2>
              Looks Interesting Right? watch this video for more Details !!
            </h2>
            <Youtube />
            <h2>Intersted ??? Want to Learn and Grow </h2>
            <h3>If yes then connect wtth our team for more details</h3>
            <Button
              href="https://wa.link/6bkj54"
              variant="success"
              align="center"
            >
              Connect on what's app <i className="fab fa-whatsapp"></i>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
