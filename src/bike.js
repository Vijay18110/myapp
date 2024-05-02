import { Link } from 'react-router-dom'
import Button from './button'
import Header, { Product, Sidemenu } from './shop'
const Bike = () => {
    return (
        <>
            <Header Header="online shop" />
            <div className="r2">
                <div className="c1">
                    <Sidemenu sidebar1="car" sidebar2="mobile" sidebar3="bike" car="/car" bike="/bike" mobile="/mobile" />
                </div>
                <div className="c2">
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} /><Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                    <Product pname="boolet" price="150000" offer="120000" pic={require('./images/b1.jpg')} />
                </div>
            </div>

        </>
    )
}
export default Bike