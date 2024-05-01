import Navigation from "../components/Navigation";
import ProgramCards from "../components/ProgramCards";
import Footer from "../components/Footer";


const Programs = ({navigation}) => {
    return (
        <>
            <Navigation navigation={navigation} />
            <ProgramCards />
            <Footer navigation={navigation}/>
        </>
        
    );
  };
  
  export default Programs;