import Brand_icon from "../brands_icon";
import Header, { Product, Sidemenu } from "../shop";
const Bike_brands = (probs) => {
    return (
        <>
            <div className="r2">
                <Header Header=" Available brands">

                </Header>
                <div className="c1 ">
                    <Sidemenu sidebar1="car brands" sidebar2="mobile brands" sidebar3="bike brands" car="/car/brands" bike="/bike/brands" mobile="/mobile/brands">
                    </Sidemenu>
                </div>
                <div className="c2">
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>


                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>

                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>

                    <Brand_icon pname="zeep" pic={require('../images/mini-logo_files/jeep.jpg')}  ></Brand_icon>
                </div>
            </div>
        </>

    )
}
export default Bike_brands;