import instagram from "../images/instagram.jpg";
import twitter from "../images/twitter.jpg";
import whatsupp from "../images/whatsupp.jpg";
import facebook from "../images/fb.jpg";
import tiktok from "../images/tiktok.jpg";
import netflix from "../images/netfix.jpg";
import CardComponentInterface from "./CardComponentInterface";

const socialMediaData: CardComponentInterface[] = [
    {
        image: instagram,
        title: 'Instagram',
        description: 'Instagram is a photo and video sharing social networking service...',
        date: new Date().toLocaleDateString(),
    },
    {
        image:twitter,
        title: 'Twitter',
        description: 'Twitter is a free social networking site where users broadcast short...',
        date: new Date().toLocaleDateString(),
    },
    {
        image:whatsupp,
        title: 'Whatsupp',
        description: 'WhatsApp is a freeware, cross-platform, centralized instant messaging...',
        date: new Date().toLocaleDateString(),
    },
    {
        image:facebook,
        title: 'Facebook',
        description: 'Facebook is a social networking site that makes it easy for you too...',
        date: new Date().toLocaleDateString(),
    },
    {
        image:tiktok,
        title: 'Tiktok',
        description: 'TikTok is a video-sharing app that allows users to create...',
        date: new Date().toLocaleDateString(),
    },
    {
        image:netflix,
        title: 'Netflix',
        description: 'Netflix is a subscription-based streaming service that allows...',
        date: new Date().toLocaleDateString(),
    },
];
export default socialMediaData;