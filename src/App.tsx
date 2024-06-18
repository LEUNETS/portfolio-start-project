import "./App.css";
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/header/secthion/main/Main";
import {Skills} from "./layout/header/secthion/skills/Skills";
import {Works} from "./layout/header/secthion/works/Works";
import {Testimony} from "./layout/header/secthion/testimony/Testimony";
import {Contact} from "./layout/header/secthion/contacts/Contacts";
import {Slogan} from "./layout/header/secthion/slogan/Slogan";
import {Footer} from "./layout/header/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
