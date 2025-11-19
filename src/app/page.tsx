import { AppDrawer } from "@/components/drawer/Drawer";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HeroLayout } from "@/components/hero/HeroLayout";
import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { About } from "@/sections/home-page/about/About";
import { FAQ } from "@/sections/home-page/faq/FAQ";
import { Gallery } from "@/sections/home-page/gallery/Galerry";
import { Procedures } from "@/sections/home-page/procedures/Procedures";
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
