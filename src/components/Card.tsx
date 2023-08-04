import instagram from '../images/instagram.jpg'
import twitter from '../images/twitter.jpg'
import whatsupp from '../images/whatsupp.jpg'
import facebook from '../images/fb.jpg'
import tiktok from '../images/tiktok.jpg'
import netflix from '../images/netfix.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Card() {
    const now = new Date();
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <div className='card text-bg-light mb-3'>
                    <div className='card-header'>
                        <img style={{width: '10%', marginLeft: '50%'}} src={instagram} alt="instagram"/>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Instagram</h5>
                        <p className='card-text'>Instagram is a photo and video sharing social networking
                            service owned by American company Meta Platforms. </p>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col'>
                                <p className='card-text'><small
                                    className='text-muted'>{now.toLocaleDateString()}</small></p>
                            </div>
                            <div className='col'>
                                <FontAwesomeIcon icon={["fas", "heart"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card text-bg-light mb-3'>
                    <div className='card-header'>
                        <img src={twitter} style={{width: '8%', marginLeft: '50%'}} className="card-img-top" alt="twitter"/>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Twitter</h5>
                        <p className='card-text'>Twitter is a free social networking site where users broadcast short
                            posts known as tweets.
                            These tweets can contain text, videos, photos or links.</p>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col'>
                                <p className='card-text'><small
                                    className='text-muted'>{now.toLocaleDateString()}</small></p>
                            </div>
                            <div className='col'>
                                <FontAwesomeIcon icon={["fas", "heart"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='card text-bg-light mb-3'>
                    <div className='card-header'>
                        <img src={whatsupp} style={{width: '8%', marginLeft: '50%'}} className="card-img-top"
                             alt="whatsupp"/>
                    </div>
                    <div className='card-body'>
                        <h5 className='card-title'>Whatsupp</h5>
                        <p className='card-text'>WhatsApp is a freeware, cross-platform, centralized instant messaging
                            and voice-over-IP service.</p>
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col'>
                                <p className='card-text'><small
                                    className='text-muted'>{now.toLocaleDateString()}</small></p>
                            </div>
                            <div className='col'>
                                <FontAwesomeIcon icon={["fas", "heart"]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-4'>
                    <div className='card text-bg-light mb-3'>
                        <div className='card-header'>
                            <img src={facebook} style={{width: '8%', marginLeft: '50%'}} className="card-img-top"
                                 alt="facebook"/>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Facebook</h5>
                            <p className='card-text'>Facebook is a social networking site that makes it easy for you to
                                connect and share with family and friends online.</p>
                        </div>
                        <div className='card-footer'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='card-text'><small
                                        className='text-muted'>{now.toLocaleDateString()}</small></p>
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={["fas", "heart"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card text-bg-light mb-3'>
                        <div className='card-header'>
                            <img src={tiktok} style={{width: '8%', marginLeft: '50%'}} className="card-img-top"
                                 alt="tiktok"/>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Tiktok</h5>
                            <p className='card-text'>TikTok is a video-sharing app that allows users to create and share
                                short-form videos on any topic.</p>
                        </div>
                        <div className='card-footer'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='card-text'><small
                                        className='text-muted'>{now.toLocaleDateString()}</small></p>
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={["fas", "heart"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card text-bg-light mb-3'>
                        <div className='card-header'>
                            <img src={netflix} style={{width: '8%', marginLeft: '50%'}} className="card-img-top"
                                 alt="netflix"/>
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>Netflix</h5>
                            <p className='card-text'>Netflix is a subscription-based streaming service that allows our
                                members to watch TV shows and movies on an internet-connected device.</p>
                        </div>
                        <div className='card-footer'>
                            <div className='row'>
                                <div className='col'>
                                    <p className='card-text'><small
                                        className='text-muted'>{now.toLocaleDateString()}</small></p>
                                </div>
                                <div className='col'>
                                    <FontAwesomeIcon icon={["fas", "heart"]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;