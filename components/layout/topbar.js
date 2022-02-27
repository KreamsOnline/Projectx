import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Fragment } from 'react';



export default function TopBar({ menuOpen, setMenuOpen }) {

    return (
        <Fragment>
            <div className={"topbar " + (menuOpen && "active")}>
                <div className="wrapper">
                    <div className="left">
                        <a href="#intro" className="logo">
                            genius.
                        </a>
                        <div className="itemContainer">
                            <AccountCircleIcon className="icon" />
                            <span>+44 924 12 74</span>
                        </div>
                        <div className="itemContainer">
                            <EmailIcon className="icon" />
                            <span>safak@genius.com</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}