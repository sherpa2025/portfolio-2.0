import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Image,
  Text,
} from "@chakra-ui/react";
import PDF from "../../assets/pdf.png";
import { ProjectDrawerProps } from "../../types";
import Close from "../../assets/close.svg";
import style from "./details.module.css";
const ProjectDetails: React.FC<ProjectDrawerProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader className={style.header}>
          {project.title}
          <Image src={Close} onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>
          <Text>
            <strong>Description: </strong> {project.description}
          </Text>
          <Text mt="2">
            <strong>Summarry: </strong> {project.summary}
          </Text>
          <Text mt="2" fontWeight="bolder">
            Tools:
          </Text>
          <Text ml="10" fontWeight="bold">
            {project.tools.join(" • ")}
          </Text>
          <hr className={style.line} />
          <Text fontWeight="bold">Here is the PDF report for the project:</Text>
          <div className={style.image}>
            {project.pdfLink && (
              <a
                href={project.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={PDF}
                  alt="PDF report"
                  className={style["footer-image"]}
                />
              </a>
            )}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDetails;
