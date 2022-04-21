import "../App/App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import ArtCategory from "../Categories/ArtCategory";
import ArticleCategory from "../Categories/ArticleCategory";
import ChemistryCategory from "../Categories/ChemistryCategory";
import CollegeCategory from "../Categories/CollegeCategory";
import LanguageCategory from "../Categories/LanguageCategory";
import ReligiousCategory from "../Categories/ReligiousCategory";
import SportsCategory from "../Categories/SportsCategory";
import MathCategory from "../Categories/MathCategory";
import Register from "../CRUD/Register";
import Update from "../CRUD/Update";
import Delete from "../CRUD/Delete";

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
