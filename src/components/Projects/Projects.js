import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import restApi from "../../Assets/Projects/rest-api-scaled.png";
import buildingNow from "../../Assets/Projects/buildingnow.png";
import torrens from "../../Assets/Projects/torrens.png";
import microservices from "../../Assets/Projects/microservicios-nodejs.jpg";
import datax from "../../Assets/Projects/datax.jpg";
import multistreaming from "../../Assets/Projects/multistreaming.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("recent")} <strong className="purple">{t("Works")} </strong>
        </h1>
        <p style={{ color: "white" }}>{t("description")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservices}
              isBlog={false}
              title={t("title1")}
              description={t("description1")}
              ghLink="https://github.com/juniorotero06/ticketing"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={torrens}
              isBlog={true}
              title={t("title2")}
              description={t("description2")}
              ghLink="https://drive.google.com/file/d/1UZLy-gDG4ldiZ0NJup8bgAwfBUPgvHZR/view?usp=sharing"
              // demoLink="https://drive.google.com/file/d/1UZLy-gDG4ldiZ0NJup8bgAwfBUPgvHZR/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multistreaming}
              isBlog={true}
              title={t("title3")}
              description={t("description3")}
              ghLink="https://drive.google.com/file/d/12cg2SlLL-jBfS_LKHQaI5qCWgciNdk2W/view?usp=sharing"
              // demoLink="https://drive.google.com/file/d/12cg2SlLL-jBfS_LKHQaI5qCWgciNdk2W/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restApi}
              isBlog={false}
              title={t("title4")}
              description={t("description4")}
              ghLink="https://github.com/juniorotero06/APIs-Architecture"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datax}
              isBlog={false}
              title={t("title5")}
              description={t("description5")}
              ghLink="https://github.com/juniorotero06/datax_movil"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildingNow}
              isBlog={false}
              title={t("title6")}
              description={t("description6")}
              ghLink="https://github.com/juniorotero06/buildingNowApp-TS"
              demoLink="https://play.google.com/store/apps/details?id=com.buildingnowappts&hl=es_CO&gl=US"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
