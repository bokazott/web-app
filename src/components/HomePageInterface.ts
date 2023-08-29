import CardComponentInterface from "./CardComponentInterface";
interface HomePageInterface {
    favouriteCards: CardComponentInterface[];
    setFavouriteCards: React.Dispatch<React.SetStateAction<CardComponentInterface[]>>;
    updateSearchHistory: (searchQuery: string) => void;
}
export default HomePageInterface;
