import React, { useEffect, useState } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import RegistrationDataView from '../components/RegistrationDataView';
import RegistrationNavigationBar from '../components/RegistrationNavigationBar';



const RegistrationDashboard = ({navigation}) => {
    const axiosPrivate = useAxiosPrivate();
    const [requestUrl, setRequestUrl] = useState(undefined)
    const [responseData, setResponseData] = useState()
    
        useEffect(() => {
            let isMounted = true;
            const controller = new AbortController();

            const getRegistrationData = async () => {
                try {
                    const response = await axiosPrivate.get(requestUrl, {
                        signal: controller.signal
                    })
                    isMounted && setResponseData(response.data)
                } catch (err) {
                    console.error(err);
                }
            }
            if (requestUrl !== undefined){
                getRegistrationData()
            }

            return () => {
                isMounted = false;
                controller.abort();
            }

        }, [requestUrl, axiosPrivate]); // Empty dependency array means this effect runs only once, equivalent to componentDidMount()


    return (
        <>
        <Navigation navigation={navigation} />
        <div className="flex flex-col md:flex-row lg:flex-row flex-1 items-stretch">
            <RegistrationNavigationBar setRequestUrl={setRequestUrl}/>
            <RegistrationDataView responseData={responseData} />
        </div>
        <Footer navigation={navigation}/>
        </>
       
    );
  };

export default RegistrationDashboard;