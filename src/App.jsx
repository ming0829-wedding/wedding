// styles
import "./font.css";
import "./App.css";
import styled from "styled-components";

// hooks
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

// sections
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Greeting from "./sections/Greeting";
import CalendarSection from "./sections/CalendarSection";
import Location from "./sections/Location";
import Contact from "./sections/Contact";
import Account from "./sections/Account";
import Share from "./sections/Share";

// slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// toast
import { ToastContainer } from "react-toastify";

import Sound from "./components/Sound/Sound";
import FallingHearts from "./components/FallingHearts";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <StyledLayout>
          <Sound />
          <FallingHearts />
          {isMounted && (
            <>
              <Hero />
              <Gallery />
              <Divider />
              <Greeting />
              <Divider />
              <CalendarSection />
              <Divider />
              <Location />
              <Divider />
              <Contact />
              <Divider />
              <Account />
              <Divider />
              <Share />
            </>
          )}
        </StyledLayout>
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
      </RecoilRoot>
    </BrowserRouter>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #f5efe5;
  color: #3d2e23;
  font-family: "Gaegu", "Pretendard", -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0d4bf;
  margin: 0 28px;
`;

export default App;
