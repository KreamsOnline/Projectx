import { Fragment } from "react";
import Link from 'next/link';
import styled from "styled-components";

const MenuStyles = styled.div`
        width: 300px;
        height: 100vh;
        background-color: red;
        position: fixed;
        top: 0;
        right: -300px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 1s ease;
`;

const UnorderedStyles = styled.ul`
        margin: 0;
        padding: 0;
        background-color: black;
        list-style: none;
        font-size: 30px;
        font-weight: 300;
        color: white;
        width: 60%;
`;

const ListStyles = styled.li`
        
`



export default function MainMenu({ menuOpen, setMenuOpen }) {
    const setMenuOption = () => {
        setMenuOpen(false);
    }

    return (
            <MenuStyles>
                <UnorderedStyles>
                    <li onClick={setMenuOption}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <Link href="/portfolio">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <Link href="/works">
                            <a>Works</a>
                        </Link>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <Link href="/testimonials">
                            <a>Testimonials</a>
                        </Link>
                    </li>
                    <li onClick={()=>setMenuOpen(false)}>
                        <Link href="/contact">
                            <a>Contact</a> 
                        </Link>
                    </li>
                </UnorderedStyles>
            </MenuStyles>
    )
}