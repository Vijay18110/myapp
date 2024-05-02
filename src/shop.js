import { Link } from "react-router-dom";
const Header = (probs) => {
    return (
        <>
            <div className="r1 bg-success ">{probs.Header}</div>
        </>
    )
}
const Sidemenu = (probs) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to={probs.car}>
                        <div> {probs.sidebar1}</div>
                    </Link>
                </li>
                <li className="list-group-item ">
                    <Link to={probs.mobile}><div> {probs.sidebar2}</div>
                    </Link>

                </li>
                <li
                    className="list-group-item " >
                    <Link to={probs.bike}><div> {probs.sidebar3}</div>
                    </Link>
                </li>
            </ul>
        </>
    )
}
const Product = (probs) => {
    return (
        <>
            <div className="m1"><img src={probs.pic} />
                <p>{probs.pname}</p>
                <p>
                    <span>price:<del>{probs.price}</del></span>&nbsp;
                    <span>{probs.offer}-/</span>
                </p>
                <button className='button'>add to card</button>
            </div>
        </>
    )
}
export default Header;
export { Sidemenu, Product };