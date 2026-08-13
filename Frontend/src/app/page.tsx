import Hero from "@/components/UI/Hero";
import Journey from "@/components/UI/Journey";
import TechStack from "@/components/UI/TechStack";
import WhyFit from "@/components/UI/Whyfit";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col justify-center'>
      <Hero />
      <WhyFit/>
      <TechStack/>
      <Journey/>
    </main>
  );
}
