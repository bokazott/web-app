const SortComponent = () => {
    return (
        <div className='col-4'>
            <div className="dropdown mt-5 mx-5">
                <button className="btn btn-secondary dropdown-toggle" type="button"
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
    )
}
export default SortComponent;