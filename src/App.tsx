import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import GuestTable from './views/Guests/GuestTable'
import Home from './views/Home/Home';
import './App.css';
import LoadingView from './views/Loading/Loading';
import Rsvp from './views/Rsvp/Rsvp';
import OurStory from './views/OurStory/OurStory';
import Gifts from './views/Gifts/Gifts';
import Event from './views/Event/Event';
import Travel from './views/Travel/Travel';
import Faq from './views/Faq/Faq';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
          <MusicPlayer />
        <Routes>
          <Route path='/' element={<LoadingView/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/guests" element={<GuestTable />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/event" element={<Event />} />
          <Route path="/travel" element={<Travel />} />
           <Route path="/faqs" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
