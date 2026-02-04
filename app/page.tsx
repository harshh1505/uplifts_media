import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Problems } from '@/components/problems';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { StartupsSection } from '@/components/startups';
import { CaseStudies } from '@/components/case-studies';
import { FAQ } from '@/components/faq';
import { FinalCTA } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <StartupsSection />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
    </>
  );
}
