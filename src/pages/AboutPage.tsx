
import { Helmet, HelmetProvider } from "react-helmet-async";
import About from "@/components/About";
import BackButton from "@/components/BackButton";

const AboutPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about me, a passionate Full Stack Developer specializing in creating modern and user-friendly web applications." />
      </Helmet>
      <BackButton />
      <About />
    </HelmetProvider>
  );
};

export default AboutPage;
