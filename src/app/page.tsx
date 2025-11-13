import { About } from "@/components/home-page/about/About";
import { FAQ } from "@/components/home-page/faq/FAQ";
import { Products } from "@/components/home-page/faq/Products";
import { Gallery } from "@/components/home-page/gallery/Galerry";
import { Procedures } from "@/components/home-page/procedures/Procedures";
import { Footer } from "@/components/main/footer/Footer";
import { Header } from "@/components/main/header/Header";
import { HeroLayout } from "@/components/main/hero/HeroLayout";
import { SectionLayout } from "@/layouts/section-layout/SectionLayout";
import { Box } from "@mui/joy";

export default function Home() {
  return (
    <>
      <Header />
      <SectionLayout>
        <HeroLayout title="Sinta-se unica!" buttonText="Cuide-se agora" />
      </SectionLayout>
      <Box>
        <About />
      </Box>
      <SectionLayout bgColor="background.body">
        <Procedures />
      </SectionLayout>
      <SectionLayout bgColor="background.surface">
        <Gallery />
      </SectionLayout>
      <SectionLayout bgColor="primary.400">
        <FAQ />
      </SectionLayout>
      <Footer />
    </>
  );
}
