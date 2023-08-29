import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';


interface HeartIconProps {
    onClick: () => void;
}

function HeartIcon({ onClick }: HeartIconProps) {
    return (
        <FontAwesomeIcon
            icon={farHeart}
            onClick={onClick}
            style={{ float: 'right', cursor: 'pointer' }}
        />
    );
}

export default HeartIcon;