import React from 'react';

function HeaderConfig(props) {
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }

    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-right">
            <a href="tel:5553225740" className="tel-no">+(55) 5322 5740</a>
            <a href="mail_to:imcyc@imcyc.com" className="tel-no">imcyc@imcyc.com</a>
            <button onClick={LoginRegHandler} className="btn-cog"><i className="fa fa-cog" /></button>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars" /></button>
        </div>
    );
}

export default HeaderConfig;