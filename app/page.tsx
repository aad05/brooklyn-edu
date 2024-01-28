import Clients from "@/components/clients";
import CountUp from "@/components/count-up";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Membership from "@/components/membership";
import Navbar from "@/components/navbar";
import NewsBlogs from "@/components/news-blogs";
import OurServices from "@/components/our-services";
import Request from "@/components/request";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurServices />
      <CountUp />
      <Membership />
      <Team />
      <Request />
      <Clients />
      <NewsBlogs />
      <Footer />
    </main>
  );
}
