import EventSignUp from "../components/Events/EventSignUp"
import IntroSection from "../components/IntroSection";
import Navigation from "../components/Navigation";

import Footer from "../components/Footer";


const Volunteer = ({navigation, formPage, setFormPage}) => {
  
    return (
        <>
        <Navigation navigation={navigation} />
        {formPage === 1 && <IntroSection title={"We are so pleased you'd like to volunteer!"} intro={" Right now, we only have one event we require volunteers for 'Equip for Surfing'. Please fill out the registration form below so we can place you in your best fit role. We can't wait to see you on the waves!"}/>}
        <EventSignUp formPage={formPage} setFormPage={setFormPage} />
        <Footer navigation={navigation}/>
        </>
       
    );
  };
  
export default Volunteer;