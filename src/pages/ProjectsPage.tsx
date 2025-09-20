
import { Helmet, HelmetProvider } from "react-helmet-async";
import Projects from "@/components/Projects";
import BackButton from "@/components/BackButton";

const ProjectsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Projects | My Portfolio</title>
        <meta name="description" content="A collection of my projects, showcasing my skills in web development and problem-solving." />
      </Helmet>
      <BackButton />
      <Projects />
    </HelmetProvider>
  );
};

export default ProjectsPage;
