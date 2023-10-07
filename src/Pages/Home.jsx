import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import PopularCourses from "../Components/PopularCourses";
import Services from "../Components/Services";
import UnlimitedPossibility from "../Components/UnlimitedPossibility";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Services></Services>
      <PopularCourses></PopularCourses>
      <UnlimitedPossibility></UnlimitedPossibility>
      <Footer></Footer>
    </div>
  );
};

export default Home;
