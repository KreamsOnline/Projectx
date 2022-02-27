import { Fragment, useState } from "react";
import MainMenu from "./mainmenu";
import TopBar from "./topbar";

export default function Layout(props) {
    const [menuOpen,setMenuOpen] = useState(false)

    return (
        <Fragment>
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MainMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>{props.children}</main>
        </Fragment>
    )
}
