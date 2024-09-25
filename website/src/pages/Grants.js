import Navigation from "../components/Navigation";
import IntroSection from "../components/IntroSection";
import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";


const Grants = ({navigation}) => {
    return (
        <>
            <Navigation navigation={navigation} />
            <IntroSection title={"EQUIP FOR LIVING FUNDING GRANTS"} intro={"The Equip For Funding Grant Program is open to adults with special needs. It is a grant program for equipment, therapy, or activities that are not covered by insurance to help keep them independent and Active."}/>
            <ContentSection />
            <Footer navigation={navigation}/>
        </>
        
    );
  };
  
  export default Grants;