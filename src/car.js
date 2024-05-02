import { Link } from 'react-router-dom'
import Button from './button'
import Header, { Product, Sidemenu } from './shop'
const Car = () => {
    return (
        <>
            <Header Header="online shop" />
            <div className="r2">
                <div className="c1">
                    <Sidemenu sidebar1="car" sidebar2="mobile" sidebar3="bike" car="/car" bike="/bike" mobile="/mobile" />
                </div>
                <div className="c2">
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="4000" offer="3000" pname="Toyata" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="4000" offer="3000" pname="Toyata" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="4000" offer="3000" pname="Toyata" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />
                    <Product price="2000" offer="1000" pname="Maruti" pic={require('./images/1.jfif')} />

                </div>
            </div>

        </>
    )
}
export default Car