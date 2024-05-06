import EventSignUp from "../components/Events/EventSignUp"
import IntroSection from "../components/IntroSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const EventRegistration = ({navigation}) => {
    return (
        <>
        <Navigation navigation={navigation} />
        <IntroSection title={"We are so pleased you'd like to volunteer!"} intro={" Right now, we only have one event we require volunteers for 'Equip for Surfing'. Please fill out the registration form below so we can place you in your best fit role. We can't wait to see you on the waves!"}/>
        <EventSignUp />
        <Footer navigation={navigation}/>
        </>
       
    );
  };
  
export default EventRegistration;