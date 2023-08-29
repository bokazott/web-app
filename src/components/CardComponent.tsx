
import CardComponentInterface from "./CardComponentInterface";
import HeartIcon from "./HeartIcon";
import {AddToFavouritesInterface} from "./AddToFavouritesInterface";
export const CardComponent = (props: CardComponentInterface & AddToFavouritesInterface) => {
    return (
        <div className='col-4 mt-5'>
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
                            <HeartIcon onClick={() => props.addToFavourites(props)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;




