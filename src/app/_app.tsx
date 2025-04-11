import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Layout/Header";
import NavbarCategories from "@/components/Layout/NavbarCategories";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SEO />
      <NavbarCategories />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
