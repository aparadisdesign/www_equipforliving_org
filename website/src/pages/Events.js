import EventListing from "../components/Events/EventListing";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Events = ({navigation}) => {
    return (
        <>
        <Navigation navigation={navigation} />
        <EventListing />
        <Footer navigation={navigation}/>
        </>
       
    );
  };
  
export default Events; 