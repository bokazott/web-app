const SortComponent=()=>{
    return(
        <div className='row'>
            <div className='col-4'>
                <div className="dropdown">
                    <button style={{marginLeft: '900px'}} className="btn btn-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown"
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
export default SortComponent;