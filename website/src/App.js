import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProgramCards from "./components/ProgramCards";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import EventRegistration from "./pages/EventRegistration";
import NoPage from "./pages/NoPage";

const navigation = [
  // { name: 'Events', href: '#' },
  { name: 'Programs', href: '/programs' },
  { name: 'Donate', href: 'https://www.paypal.com/donate/?cmd=_donations&business=equipforliving@gmail.com&item_name=Equip%20For%20Living%20Foundation&currency_code=USD' },
  // { name: 'Contact Us', href: '#' },
]

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home navigation={navigation} />} />
          {/* <Route path="events" element={<Events navigation={navigation} />} /> */}
          {/* <Route path="event-sign-up" element={<EventRegistration navigation={navigation} />} /> */}
          <Route path="programs" element={<Programs navigation={navigation} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
