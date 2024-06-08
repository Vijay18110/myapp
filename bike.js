import { Link } from 'react-router-dom'
import Button from './button'
import Header, { Product } from './shop'
const Bike = () => {
    return (
        <>

            <div className="r2">

                <div className="c2">
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="250000" offer="124000" pic={require('./images/b2.jpg')} />
                    <Product pname="apache" price="140000" offer="1210000" pic={require('./images/b3.jpg')} />
                    <Product pname="boolet" price="1750000" offer="1240000" pic={require('./images/b4.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="yamaha" price="350000" offer="10000" pic={require('./images/b5.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="110000" offer="130000" pic={require('./images/b6.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="super" price="1550000" offer="120000" pic={require('./images/b7.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="hero" price="150000" offer="120000" pic={require('./images/b8.jpg')} />
                </div>
            </div>
        </>
    )
}
export default Bike