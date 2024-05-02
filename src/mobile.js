import { Link } from 'react-router-dom'
import Button from './button'
import Header, { Product, Sidemenu } from './shop'
const Mobile = () => {
    return (
        <>
            <Header Header="online shop" />
            <div className="r2">
                <div className="c1">
                    <Sidemenu sidebar1="car" sidebar2="mobile" sidebar3="bike" car="/car" bike="/bike" mobile="/mobile" />
                </div>
                <div className="c2">
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} /> <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} /> <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} /> <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />

                    <Product pname="vivo" price="12000" offer="11200" pic={require('./images/mobile.jpg')} />
                </div>
            </div>

        </>
    )
}
export default Mobile