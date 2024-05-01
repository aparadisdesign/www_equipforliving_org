import EventSignUp from "../components/Events/EventSignUp"
import IntroSection from "../components/IntroSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const EventRegistration = ({navigation}) => {
    return (
        <>
        <Navigation navigation={navigation} />
        <IntroSection />
        <EventSignUp />
        <Footer navigation={navigation}/>
        </>
       
    );
  };
  
export default EventRegistration;