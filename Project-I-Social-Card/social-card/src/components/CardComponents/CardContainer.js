import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

function CardContainer() {
    return (
        <div class="cardMain">
            <CardBanner />
            <CardContent />
        </div>
    );
}

export default CardContainer;
