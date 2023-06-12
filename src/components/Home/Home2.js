import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Captura.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LetMe")} <span className="purple"> {t("Introduce")} </span>{" "}
              {t("Myself")}
            </h1>
            <p className="home-about-body">
              {t("subtitle")}
              <br />
              <br />
              {t("fluent")}
              <i>
                <b className="purple">{t("reactNode")}</b>
              </i>
              <br />
              <br />
              {t("interest")}&nbsp;
              <i>
                <b className="purple">{t("bold1")} </b> {t("areas")}{" "}
                <b className="purple">{t("bold2")}</b>
              </i>
              <br />
              <br />
              {t("passionate")}
              <b className="purple"> {t("bold3")}</b> {t("Knowledge")}
              <i>
                <b className="purple"> {t("bold4")}</b>
              </i>
              &nbsp; {t("cloud")}
              <i>
                <b className="purple"> {t("bold5")}</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("findme")}</h1>
            <p>
              {t("feel")} <span className="purple">{t("connect")} </span>
              {t("withme")}
            </p>
            <p>
              email: <span className="purple">dgrotero697@gmail.com </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juniorotero06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edgar-junior-otero-rada-442414166/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
