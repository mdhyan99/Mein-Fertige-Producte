import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Music from "./music.mp3"
import { Link } from "react-router-dom";

export default function Header() {
    const music = new Audio(Music)
    return (
        <div>
            <Navbar className="mb-4" bg="warning">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Book Store</Link>
                    </Navbar.Brand>
                    <p> Produkte im Warenkorb</p>
                    <button onClick ={
                        ()=> {
                            music.play()
                        }
                    }>
                        Play music
                    </button>
                    <button onClick ={
                        ()=> {
                            music.pause()
                        }
                    }>
                        Stop music
                    </button>
                    <button onClick ={
                        ()=> {
                            music.volume =1;
                        }
                    }>
                        +
                    </button>
                    <button onClick ={
                        ()=> {
                            music.volume =0.2;
                        }
                    }>
                        -
                    </button>
                    <button onClick ={
                        ()=> {
                            music.volume =0;
                        }
                    }>
                        Mute
                    </button>
                </Container>
            </Navbar>
        </div>
    );
}
