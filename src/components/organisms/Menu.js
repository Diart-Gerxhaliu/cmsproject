import React, { useEffect, useState } from 'react';
import Image from '../atoms/Image';
import NavBar from '../molecules/NavBar';
import Navcomps from '../../json/Menu.json';
import Logo from '../../json/Logo.json';
import '../../assets/style/Menu.css';

function Menu() {
    const [menuStyle, setMenuStyle] = useState({});
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        if (!localStorage.getItem("Logo")) {
            localStorage.setItem("Logo", JSON.stringify(Logo));
        }
        if (!localStorage.getItem("Navbar")) {
            localStorage.setItem("Navbar", JSON.stringify(Navcomps));
        }

        const applyMenuStyle = () => {
            const savedProperties = localStorage.getItem('menuProperties');
            if (savedProperties) {
                setMenuStyle(JSON.parse(savedProperties));
            }
        };

        applyMenuStyle();
        window.addEventListener('storage', applyMenuStyle);
        return () => window.removeEventListener('storage', applyMenuStyle);
    }, []);

    const LG = JSON.parse(localStorage.getItem("Logo"));
    const LN = JSON.parse(localStorage.getItem("Navbar"));

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Get layout styles based on positions
    const getLayoutStyles = () => {
        const { logoPosition, navPosition, layout } = menuStyle;
        const containerStyle = {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '0 2rem',
            height: menuStyle.height || '70px',
            transition: 'all 0.3s ease'
        };

        // Handle layout order
        if (layout === 'nav-logo') {
            containerStyle.flexDirection = 'row-reverse';
        }

        // Handle logo position
        const logoContainerStyle = {
            display: 'flex',
            alignItems: 'center'
        };

        if (logoPosition === 'center') {
            logoContainerStyle.flex = '1';
            logoContainerStyle.justifyContent = 'center';
        } else if (logoPosition === 'right') {
            logoContainerStyle.marginLeft = 'auto';
        }

        // Handle nav position
        const navContainerStyle = {
            display: 'flex',
            alignItems: 'center'
        };

        if (navPosition === 'center') {
            navContainerStyle.flex = '1';
            navContainerStyle.justifyContent = 'center';
        } else if (navPosition === 'right') {
            navContainerStyle.marginLeft = 'auto';
        } else if (navPosition === 'space-between') {
            navContainerStyle.flex = '1';
            navContainerStyle.justifyContent = 'space-between';
        }

        return { containerStyle, logoContainerStyle, navContainerStyle };
    };

    const { containerStyle, logoContainerStyle, navContainerStyle } = getLayoutStyles();

    return (
        <div className='menu' style={{
            ...containerStyle,
            background: menuStyle.background || '#ffffff',
            color: menuStyle.textColor || '#333333',
            borderBottom: menuStyle.borderBottom || '1px solid #eaeaea',
            boxShadow: menuStyle.boxShadow || 'none',
            backdropFilter: menuStyle.backdropFilter || 'none'
        }}>
            <div className="logo-container" style={logoContainerStyle}>
                <Image 
                    src={LG[0].image} 
                    alt={"logo"}
                    style={{
                        height: '40px',
                        filter: menuStyle.textColor === '#ffffff' ? 'brightness(0) invert(1)' : 'none'
                    }}
                />
            </div>

            {/* Hamburger Menu Button */}
            <button 
                className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                style={{
                    color: menuStyle.textColor || '#333333',
                    display: 'none' // Hidden by default, shown in mobile via CSS
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className="nav-container" style={navContainerStyle}>
                <NavBar 
                    navlist={LN}
                    menuStyle={menuStyle}
                    isMobileMenuOpen={isMobileMenuOpen}
                />
            </div>
        </div>
    );
}

export default Menu;
