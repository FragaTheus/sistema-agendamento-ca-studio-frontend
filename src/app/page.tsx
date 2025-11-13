import { About } from "@/components/home-page/about/About";
import { FAQ } from "@/components/home-page/faq/FAQ";
import { Gallery } from "@/components/home-page/gallery/Galerry";
import { Procedures } from "@/components/home-page/procedures/Procedures";
import { AppDrawer } from "@/components/main/drawer/Drawer";
import { Footer } from "@/components/main/footer/Footer";
import { Header } from "@/components/main/header/Header";
import { HeroLayout } from "@/components/main/hero/HeroLayout";
import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box } from "@mui/joy";

export default function Home() {
  return (
    <>
      <Header />
      <AppDrawer />
      <SectionLayout id="hero">
        <HeroLayout title="Sinta-se unica!" buttonText="Cuide-se agora" />
      </SectionLayout>
      <Box id="sobre">
        <About />
      </Box>
      <SectionLayout id="procedimentos" bgColor="background.body">
        <Procedures />
      </SectionLayout>
      <SectionLayout id="galeria" bgColor="background.surface">
        <Gallery />
      </SectionLayout>
      <SectionLayout id="FAQ" bgColor="primary.400">
        <FAQ />
      </SectionLayout>
      <Footer />
    </>
  );
}
