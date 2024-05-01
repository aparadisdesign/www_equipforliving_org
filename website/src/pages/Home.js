import Hero from "../components/Hero";
import ProgramCards from "../components/ProgramCards";
import Footer from "../components/Footer";

const Home = ({navigation}) => {
    return (
        <>
            <Hero navigation={navigation} />
            <ProgramCards />
            <Footer navigation={navigation}/>
        </>
        
    );
  };
  
  export default Home;