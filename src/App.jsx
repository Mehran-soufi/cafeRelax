import { useEffect, useState } from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Service from "./components/service/Service";
import Loading from "./components/loading/Loading";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 2000);
    return setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Hero />
          <Menu />
          <Service />
          <AboutUs />
          <ContactUs />
        </>
      )}
    </>
  );
}

export default App;
