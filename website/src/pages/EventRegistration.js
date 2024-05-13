import EventSignUp from "../components/Events/EventSignUp"
import IntroSection from "../components/IntroSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import React from 'react'; 



const EventRegistration = ({navigation, formPage, setFormPage}) => {

    return (
        <>
        <Navigation navigation={navigation} />
        {formPage === 1 && <IntroSection title={"EQUIP FOR SURFING REGISTRATION"} intro={"Tell us more about you so we can make sure to give you the best surfing experience possible. We will use this information collected in this form to match you with the best equipment and instructors for your skill level. If you are a volunteer, please let us know so we can place you in your best fit role. We can't wait to see you on the waves!"}/>}
        <EventSignUp formPage={formPage} setFormPage={setFormPage}/>
        <Footer navigation={navigation}/>
        </>
       
    );
  };
  
export default EventRegistration;