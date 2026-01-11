import { HeroSection } from "@/components/layout/hero-section";
import { AboutSection } from "@/components/layout/about-section";
import { HowWeWorkSection } from "@/components/layout/how-we-work-section";
import { FAQSection } from "@/components/layout/faq-section";
import { ContactSection } from "@/components/layout/contact-section";
import WhyChooseSection from "@/components/layout/why-choose-section";
import { ServicesSection } from "@/components/layout/services-section";
import { getHomePageData } from "@/lib/sanity/fetch";

export default async function Home() {
  const homePageData = await getHomePageData();

  if (!homePageData) {
    return (
      <main>
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-muted-foreground">Failed to load page content.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeroSection data={homePageData} />
      <AboutSection data={homePageData} />
      <WhyChooseSection data={homePageData} />
      <HowWeWorkSection data={homePageData} />
      <ServicesSection data={homePageData} />
      <FAQSection data={homePageData} />
      <ContactSection data={homePageData} />
    </main>
  );
}
