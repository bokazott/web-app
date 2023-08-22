import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CardComponentInterface from "./CardComponentInterface";


export const CardComponent = (props: CardComponentInterface) => {
    return (
        <div className='col-4'>
            <div className='card text-bg-light mb-3'>
                <div className='card-header'>
                    <img style={{width: '10%', marginLeft: '50%'}} src={props.image} alt="instagram"/>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.description}</p>
                </div>
                <div className='card-footer'>
                    <div className='row'>
                        <div className='col'>
                            <p className='card-text'><small
                                className='text-muted'>{props.date}</small></p>
                        </div>
                        <div className='col'>
                            <FontAwesomeIcon icon={["fas", "heart"]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;




