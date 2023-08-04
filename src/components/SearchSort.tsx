function SearchSort(){
    return(
            <div className='row'>
                <div className='col-6'>
                    <div className="input-group mt-5">
                        <input type="text" className="form-control" placeholder="Search something"
                               aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className='col-4 mt-5'>
                    <div className="dropdown">
                        <button style={{marginLeft:'400px'}} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                           Sort
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/#">A-Z</a></li>
                            <li><a className="dropdown-item" href="/#">Z-A</a></li>
                        </ul>
                    </div>
                    </div>

                </div>
    )
}
export default SearchSort;