import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import EventRegistration from "./pages/EventRegistration";
import RegistrationDashboard from "./pages/RegistrationDashboard";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import RequireAuth from './components/RequireAuth';

const navigation = [
  { name: 'Events', href: '/events' },
  { name: 'Programs', href: '/programs' },
  { name: 'Volunteer', href: '/volunteer'},
  { name: 'Donate', href: 'https://www.paypal.com/donate/?cmd=_donations&business=equipforliving@gmail.com&item_name=Equip%20For%20Living%20Foundation&currency_code=USD' },
  // { name: 'Contact Us', href: '#' },
]


function App() {

  const [formPage, setFormPage] = useState(1);

  return (
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home navigation={navigation} />} />
          <Route path="events" element={<Events navigation={navigation} />} />
          <Route path="volunteer" element={<Volunteer navigation={navigation} formPage={formPage} setFormPage={setFormPage} />} />
          <Route path="event-sign-up" element={<EventRegistration navigation={navigation} formPage={formPage} setFormPage={setFormPage} />} />
          <Route element={<RequireAuth />}>
            <Route path="registrations" element={<RegistrationDashboard navigation={navigation} />} />
          </Route>
          <Route path="programs" element={<Programs navigation={navigation} />} />
          <Route path="login" element={<Login  navigation={navigation} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
