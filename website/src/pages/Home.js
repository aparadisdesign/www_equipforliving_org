import Hero from "../components/Hero";
import ProgramCards from "../components/ProgramCards";
import Footer from "../components/Footer";

const Home = ({navigation}) => {
    return (
        <>
            <Hero navigation={navigation} />
                <div class="bg-white py-24 sm:py-32 bg-purple">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-white">
                        <div class="mx-auto max-w-4xl lg:text-center">
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Welcome to our brand new website! While we're excited to unveil our latest project, we're still in the process of fine-tuning everything.</p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">Please pardon our dust as we work tirelessly behind the scenes to bring you an exceptional online experience. <strong> Registration for Equip For Surfing will hopefully be launching this week!</strong> However, it's not quite ready just yet. We appreciate your patience and understanding as we put the finishing touches in place.</p>
                        </div>
                    </div>
                </div>
            <ProgramCards />
            <Footer navigation={navigation}/>
        </>
        
    );
  };
  
  export default Home;
