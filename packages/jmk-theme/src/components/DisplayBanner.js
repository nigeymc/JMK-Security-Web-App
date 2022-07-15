import React from 'react';
import { connect } from "frontity"
import HeroBanner from './HeroBanner';
import SubPageHeader from './SubPageHeader';

const DisplayBannerComponent = ({ state }) => {
    // Get information about the current URL.
    const data = state.source.get(state.router.link);

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let headerImage;
    let electricalServicesImg = 'http://wp.jmksecurity.net/wp-content/uploads/2022/03/sub-header4.jpg';
    let rentalImg = 'https://wp.jmksecurity.net/wp-content/uploads/2022/02/towers_banner_no_logo.png';

    switch (getRndInteger(0, 3)) {
        case 0: headerImage = 'http://wp.jmksecurity.net/wp-content/uploads/2022/03/sub-header1.jpg'
            break;
        case 1: headerImage = 'http://wp.jmksecurity.net/wp-content/uploads/2022/03/sub-header2.jpg'
            break;
        case 2: headerImage = 'http://wp.jmksecurity.net/wp-content/uploads/2022/03/sub-header3.jpg'
            break;
        default:
    }

    return (
        <>
            {data.isHome && <HeroBanner image={`https://wp.jmksecurity.net/wp-content/uploads/2022/02/omagh-banner.jpeg`} />}
            {!data.isHome && !data.isPostArchive && !data.link.includes('/news') && data.route !== '/electrical-services/' && data.route !== '/cctv-site-and-rental/' && <SubPageHeader image={headerImage} />}
            {data.route === '/electrical-services/' && <SubPageHeader image={electricalServicesImg} />}
            {data.route === '/cctv-site-and-rental/' && <SubPageHeader image={rentalImg} />}
        </>
    )
}

export default connect(DisplayBannerComponent);