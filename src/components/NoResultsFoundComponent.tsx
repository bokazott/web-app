import {NoResultsFoundComponentInterface} from "./NoResultsFoundComponentInterface";

export const NoResultsFoundComponent = (props: NoResultsFoundComponentInterface) => {
    return <h3>No results found for the search criteria - <b>{props.searchCriteria}</b></h3>
}


export default NoResultsFoundComponent;