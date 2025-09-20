
import { Helmet, HelmetProvider } from "react-helmet-async";
import Educations from "@/components/Educations";
import BackButton from "@/components/BackButton";

const EducationsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Education | My Portfolio</title>
        <meta name="description" content="Details about my educational background and qualifications." />
      </Helmet>
      <BackButton />
      <Educations />
    </HelmetProvider>
  );
};

export default EducationsPage;
