import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/MindItGames/ScrollToTop.tsx";
import Home from "./pages/Home.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";

const App = () => {
  return (
    <BrowserRouter basename="/minditgames">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
