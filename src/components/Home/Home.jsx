import React from "react";
import Banner from "./Banner";
import AboutSection from "./AboutSection";
import UserReg from "./UserReg";
import Office from "./Office";
import Clients from "./Clients";
// import Branding from './Branding'
import Gallery from "./Gallery";
import BrandingSecond from "./BrandingSecond";
import Testimonial from "./Testimonials";
// import LandingModal from "../Modals/LandingModal";

function Home() {
  // const [showModal, setShowModal] = useState(false); // Initially, the modal is hidden.

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   // Show modal after 10 seconds
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000); // 10 seconds in milliseconds

  //   // Cleanup timer to avoid memory leaks
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      {/* {showModal && <LandingModal onClose={closeModal} />} */}
      {/* <LandingModal/> */}
      <Banner />
      <AboutSection />
      <UserReg />
      <Clients />
      {/* <Branding/> */}
      <BrandingSecond />
      <Gallery />
      <Testimonial />
      <Office />
    </div>
  );
}

export default Home;
