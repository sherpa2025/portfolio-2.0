import { useEffect, useState } from "react";
import {
  Grid,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setCards } from "../../redux/reducers/slices/cardSlice";
import { CardData } from "../../types";
import PDF from "../../assets/pdf.png";
import line from "../../assets/line.png";
import style from "./project.module.css";
import { Layout } from "../../components/layout";
import ProjectDetails from "../../components/ProjectDetails/projectDetails";
import projectsData from "./project.json";

function Project() {
  Layout(true);
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards);
  const [selectedProject, setSelectedProject] = useState<CardData | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // If needed, you can cast the imported JSON to CardData[]
    const projectData = projectsData as CardData[];
    dispatch(setCards(projectData));
  }, [dispatch]);

  const handleProjectClick = (project: CardData) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Grid className={style.gridContainer}>
      {cards.map((data, index) => (
        <Card
          key={index}
          className={style.projectCard}
          onClick={() => handleProjectClick(data)}
        >
          <CardBody className={style["body-image"]}>
            <Image src={data.imageSrc} alt={data.title} borderRadius="lg" />
            <Stack mt="4" spacing="2">
              <Heading size="md" className={style.projectCardTitle}>
                {data.title}
              </Heading>
              <Text className={style.projectCardDescription}>
                {data.description}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter display="flex" justifyContent="center" gap={3}>
            {data.pdfLink && (
              <a href={data.pdfLink} target="_blank" rel="noopener noreferrer">
                <Image src={PDF} alt="PDF" className={style["footer-image"]} />
              </a>
            )}
            <Image src={line} alt="line" className={style["footer-image"]} />
            <Text style={{ paddingTop: 10, fontWeight: "bolder" }}>
              {data.course}
            </Text>
          </CardFooter>
        </Card>
      ))}
      <ProjectDetails
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        project={selectedProject}
      />
    </Grid>
  );
}

export default Project;
