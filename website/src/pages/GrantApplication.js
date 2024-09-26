import Navigation from "../components/Navigation";
import IntroSection from "../components/IntroSection";
import GrantApplicationForm from "../components/GrantApplicationForm"
import Footer from "../components/Footer";


const GrantApplication = ({navigation}) => {
    return (
        <>
            <Navigation navigation={navigation} />
            <IntroSection 
                title={"EQUIP FOR LIVING FUNDING GRANTS"} 
                intro={"The Equip For Living Funding Grant Program is open to adults with special needs. This grant provides funding for equipment, therapy, or activities not covered by insurance, helping individuals maintain independence and stay active. Applications must be complete to be considered."}
                />
            <GrantApplicationForm />
            <Footer navigation={navigation}/>
        </>
        
    );
  };
  
export default GrantApplication;