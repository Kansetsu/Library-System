import "../style/App.css";
import { Sidebar } from "../components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import ArtCategory from "./ArtCategory";
import ArticleCategory from "./ArticleCategory";
import ChemistryCategory from "./ChemistryCategory";
import CollegeCategory from "./CollegeCategory";
import LanguageCategory from "./LanguageCategory";
import ReligiousCategory from "./ReligiousCategory";
import SportsCategory from "./SportsCategory";
import MathCategory from "./MathCategory";
import Register from "./Register";
import Update from "./Update";
import Delete from "./Delete";

export function App() {
    return (
        <>
            <Router>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/delete" element={<Delete />} />
                    <Route path="/art" element={<ArtCategory />} />
                    <Route path="/articles" element={<ArticleCategory />} />
                    <Route path="/chemistry" element={<ChemistryCategory />} />
                    <Route path="/college-content" element={<CollegeCategory />} />
                    <Route path="/language" element={<LanguageCategory />} />
                    <Route path="/math" element={<MathCategory />} />
                    <Route path="/religious" element={<ReligiousCategory />} />
                    <Route path="/sports" element={<SportsCategory />} />
                </Routes>
            </Router>
        </>
    );
}
