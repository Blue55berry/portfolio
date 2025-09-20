
import { Helmet, HelmetProvider } from "react-helmet-async";
import Skills from "@/components/Skills";
import BackButton from "@/components/BackButton";

const SkillsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Skills | My Portfolio</title>
        <meta name="description" content="A showcase of my technical skills, including frontend and backend technologies, databases, and tools." />
      </Helmet>
      <BackButton />
      <Skills />
    </HelmetProvider>
  );
};

export default SkillsPage;
