import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import { FinanceSolution } from '@/components/FinanceSolution';
import { WhyFinanceHub } from '@/components/WhyFinanceHub';
import { Eligibility } from '@/components/Eligibility';
import { ApplicationProcess } from '@/components/ApplicationProcess';
import { ReadyToStart } from '@/components/ReadyToStart';
import { Security } from '@/components/Security';
import { Testimonials } from '@/components/Testimonials';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <FinanceSolution />
        <WhyFinanceHub />
        <Eligibility />
        <ApplicationProcess />
        <ReadyToStart />
        <Security />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

