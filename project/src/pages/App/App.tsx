import "../App/App.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import Categories from "../Categories/Categories";
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
                    <Route path="/categories/:category" element={<Categories />} />
                </Routes>
            </Router>
        </>
    );
}
