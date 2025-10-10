import { Box, Flex, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import Type from "./type";
import clipArt from "../../assets/Webinar.png";
import style from "./home.module.css";
import { Layout } from "../../components/layout";
import { MdCheckCircle, MdError } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import arcgis from "../../assets/ArcGIS.png";
import autocad from "../../assets/Autocad.png";
import illustrator from "../../assets/illustrator.png";
import indesign from "../../assets/indesign.png";
import photoshop from "../../assets/photoshop.png";
import rhino from "../../assets/rhino.png";
import sketchup from "../../assets/sketchup.png";
import googleEarth from "../../assets/googleearth.png";
import linkedin from "../../assets/linkedin.svg";
import dawa from "../../assets/dawa.png";

function Home() {
  Layout(true);
  return (
    <div className={style["page-wrapper"]}>
      <div className={style["content"]}>
        <section className={style["top"]}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            className={style["content-container"]}
          >
            <Box>
              <div className={style["home-content"]}>
                <div className={style["typewriter-prompt"]}>
                  <Type />
                </div>
                <div className={style["name"]}>
                  I'M{" "}
                  <strong className={style["main-name"]}>DAWA SHERPA</strong>
                </div>
                <span className={style["break-line"]}>
                  <a
                    href="https://www.linkedin.com/in/dawayanji/"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      style={{ width: "50px" }}
                    />
                  </a>
                </span>
              </div>
            </Box>
            <Box>
              <Image
                src={clipArt}
                alt="Clip Art"
                className={style["artImage"]}
              />
            </Box>
          </Flex>
        </section>
        <section className={style["introduce-section"]}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            className={style["content-container"]}
          >
            <Box>
              <div className={style["home-content"]}>
                <div className={style["intro-heading"]}>
                  LET ME
                  <strong className={style["main-name"]}> INTRODUCE </strong>
                  MYSELF
                </div>
                <div className={style["introduction"]}>
                  I’m a junior pursuing a
                  <strong className={style["main-name"]}>
                    {" "}
                    Bachelor of Science in Environmental Design{" "}
                  </strong>
                  at the University of Colorado Boulder.
                  <span className={style["break-line"]}>
                    {" "}
                    My field of focus is
                    <strong className={style["main-name"]}>
                      {" "}
                      Sustainable Planning & Urban Design
                    </strong>
                    , with additional interests in Architecture and Product
                    Design.
                  </span>
                  <span className={style["break-line"]}>
                    <strong className={style["main-name"]}>
                      Relevant Coursework:
                    </strong>
                  </span>
                  <div>
                    <List spacing={3} ml={6}>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Urban Conflict
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Fundamentals of Planning/Urban
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Tech 3: App for ENVD
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Intermediate Planning
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdError} color="yellow.500" />
                        Contamination to Community: Urban Design for Sugar Mill
                      </ListItem>
                      <ListItem>
                        <ListIcon as={MdError} color="yellow.500" />
                        Sustainable Futures Planning
                      </ListItem>
                    </List>
                  </div>
                </div>
              </div>
            </Box>
            <Tilt>
              <img
                src={dawa}
                alt="profile pic"
                className={style["profileImage"]}
              />
            </Tilt>
          </Flex>
        </section>
        <section className={style["tools-section"]}>
          <div className={style["tool-heading"]}>
            <strong className={style["main-name"]}> Tools </strong>I use
          </div>
          <div className={style["tool-container"]}>
            {[
              { src: arcgis, name: "ArcGIS" },
              { src: autocad, name: "AutoCAD" },
              { src: illustrator, name: "Illustrator" },
              { src: indesign, name: "InDesign" },
              { src: photoshop, name: "Photoshop" },
              { src: rhino, name: "Rhino 7" },
              { src: sketchup, name: "SketchUp 7" },
              { src: googleEarth, name: "Google Earth" },
            ].map((tool, index) => (
              <div key={index} className={style["tool"]}>
                <img
                  src={tool.src}
                  alt={tool.name}
                  className={style["tool-image"]}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
