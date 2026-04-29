import React, { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import AboutNew from "./components/about_new/about_new";
import Wordle from "./components/Wordle/wordle";

import "./App.css";

const App = () => {
    const [showWordle, setShowWordle] = useState(false);

    return (
        <>
            <ParticleBackground />
            <Sidebar />

            {/* 🧠 FLOATING DESKTOP WIDGET (NOT PART OF FLOW) */}
            <AboutNew />

            {/* 🖥 MAIN PAGE CONTENT */}
            <main className="main">
                <section id="home">
                    <Home />
                </section>
            </main>

            {showWordle && (
                <Wordle onClose={() => setShowWordle(false)} />
            )}
        </>
    );
};

export default App;