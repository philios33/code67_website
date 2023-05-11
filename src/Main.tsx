
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import NoPage from './components/NoPage';
import Contact from './components/Contact';
import { useEffect } from 'react';

export default function() {

    const { pathname, hash, key } = useLocation();

    /*
    useEffect(() => {
        console.log("pathname", pathname);
    }, [pathname]);
    */

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
          window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
          setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView();
            }
          }, 0);
        }
      }, [pathname, hash, key]); // do this on route change

    return <div id="main">
        <div id="header">
            <div className="wave">
                <span id="updated">Last Updated: May 2023</span>
                <p className="heading">
                    <span className="code67">Code67</span>
                    Web development
                </p>
            </div>
            
        </div>
        <div id="parent_menu">
            <div id="parent_menu_content">
                <ul id="top_menu">
                    <li className={location.pathname === "/" ? "selected" : ""}>
                        <Link to="/" >About</Link>
                    </li>
                    <li className={location.pathname === "/cv" ? "selected" : ""}>
                        <Link to="/cv">CV</Link>
                    </li>
                    <li className={location.pathname === "/projects" ? "selected" : ""}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? "selected" : ""}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div id="parent_menu_bottom"></div>
        
        <Routes>
            <Route index element={<About />} />
            <Route path="cv" element={<CV />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
            
        <div id="footer">
            { /* <div id="curve"></div> */ }
            <div className="wave">
                <hr />
                <div className="flex">
                    <div className="flex1">Code67.com <br/>&#169; Philip Nicholls 2023</div>
                    <div className="flex1 right">Design <br/>&#169; Anna Hough 2010</div>
                </div>
            </div>
        </div>
    </div>
}