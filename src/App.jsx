import { BrowserRouter as Router, Routes, Route } from "react-router";
import Produit from "./pages/Produit";
import Layout from "./components/Layout";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Produit />} />
                </Routes>
            </Layout>
        </Router>
    )
}