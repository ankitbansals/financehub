import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Banner />
        <div className="p-8">
          <p>This is the home page content.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
