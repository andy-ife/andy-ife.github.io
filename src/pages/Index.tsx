import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { Divider } from "@/components/Divider";
import { Projects } from "@/components/Projects";
import { Contributions } from "@/components/Contributions";
import { Footer } from "@/components/Footer";

/**
 * Portfolio Homepage
 * Main page layout with all sections
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Introduction />
      <Divider />
      <Projects />
      <Divider />
      <Contributions />
      <Divider />
      <Footer />
    </div>
  );
};

export default Index;
