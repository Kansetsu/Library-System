import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./data/SidebarData.const";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import logo from "../../vendor/img/LogoLibraryBG.gif";
import { Link as ScrollTo } from "react-scroll";

export function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header id="header">
            <IconContext.Provider value={{ color: "#950505" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <img className="logo" src={logo} alt="logo" />
                    <Link to="/" className="logo-text">
                        Vini <span className="title">Library</span>
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars" onClick={showSidebar}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <li className={item.cName} >
                                        {["team", "support"].includes(item.path) ? (
                                            <ScrollTo key={index} smooth={true} offset={-77} activeClass="active" to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                                            </ScrollTo>
                                        ) : (
                                            <Link key={index} to={item.path} onClick={item.subNav && showSubnav}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                                            </Link>
                                        )}
                                    </li>

                                    {subnav &&
                                        item.subNav?.map((item, index) => {
                                            return (
                                                <li className={item.cName}>
                                                    <Link to={item.path} key={index}>
                                                        {item.icon}
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </header>
    );
}
