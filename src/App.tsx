import './App.css'

import { HashRouter, Routes, Route } from "react-router-dom";
import NounsCasePractice from "./Nouns/NounsCasePractice";
import Home from './Home';
import NounsList from './Nouns/NounsList';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nouns/" element={<NounsList />} />
        <Route path="/nouns/case-practice" element={<NounsCasePractice />} />
      </Routes>
    </HashRouter>
  );
}
