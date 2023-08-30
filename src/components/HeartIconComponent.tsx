import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {HeartIconComponentInterface} from "./HeartIconComponentInterface";


export const HeartIconComponent = (props: HeartIconComponentInterface) => {

    const [selected, setSelected] = useState<boolean>(false);

    const onIconSelected = () => {
        setSelected(!selected);
        props.onClick();
    };

    return (
        <FontAwesomeIcon
            icon={selected ? faHeartSolid : faHeartRegular}
            onClick={onIconSelected}
            style={{float: 'right', cursor: 'pointer'}}
        />
    );
}

export default HeartIconComponent;