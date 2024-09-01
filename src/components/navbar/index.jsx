// import React, { useState } from "react";
// import { FaBars, FaReact } from 'react-icons/fa';
// import { HiX } from 'react-icons/hi'
// import { Link } from 'react-router-dom';
// import './style.scss';


// const data = [
//     {
//         label: 'HOME',
//         to: '/'
//     },
//     {
//         label: 'ABOUT ME',
//         to: '/about'
//     },
//     {
//         label: 'CONTACT ME',
//         to: '/contact'
//     },
//     {
//         label: 'SKILLS',
//         to: '/skills'
//     },
//     {
//         label: 'RESUME',
//         to: '/resume'
//     },
//     {
//         label: 'PORTFOLIO',
//         to: '/portfolio'
//     }
// ]
// const Navbar = () => {
//     const [toggleIcon, setToggleIcon] = useState(false);
//     const handleToggleIcon = () => {
//         setToggleIcon(!toggleIcon)
//     }
//     return (
//         <nav>
//             <div>
//                 <nav className="navbar">
//                     <div className="navbar__container">

//                         <Link to={'/'} className="navbar__container__logo">
//                             <FaReact size={30} />
//                         </Link>
//                     </div>
//                     <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
//                         {
//                             data.map((item, key) => (
//                                 <li key={key} className="navbar__container__menu__item">
//                                     <Link className="navbar__container__menu__item__links" to={item.to}>
//                                         {item.label}                            {/****render****/}
//                                     </Link>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                     <div className="nav-icons" onClick={handleToggleIcon}>
//                         {
//                             toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
//                         }

//                     </div>
//                 </nav>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'CONTACT ME', to: '/contact' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'RESUME', to: '/resume' },
    { label: 'PORTFOLIO', to: '/portfolio' }
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <nav>
            <div>
                <div className="navbar">
                    <div className="navbar__container">
                        <Link to="/" className="navbar__container__logo">
                            <FaReact size={30} />
                        </Link>

                        {/* Nav menu */}
                        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                            {data.map((item, key) => (
                                <li key={key} className="navbar__container__menu__item">
                                    <Link className="navbar__container__menu__item__links" to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Toggle icon */}
                        <div className="nav-icons" onClick={handleToggleIcon}>
                            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
