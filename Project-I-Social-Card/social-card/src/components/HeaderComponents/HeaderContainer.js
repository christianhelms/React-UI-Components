import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

function HeaderContainer() {
    return (
        <div class="headerContainer">
            <div class="headerLeft">
            <ImageThumbnail />
            </div>
            <div class="headerRight">
            <HeaderTitle />
            <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;
