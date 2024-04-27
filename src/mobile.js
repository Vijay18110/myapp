
const Mobile = () => {
    return (
        <>
            <div className="r1">Online Shop</div>
            <div className="r2">
                <div className="c1">
                    <ul>
                        <li onClick={
                            "Setvalue(0)"
                        }>mobile
                        </li>
                        <li
                            onClick={"Setvalue(1)"}
                        > Mobile</li>
                        <li
                            onClick={"Setvalue(2)"}
                        >car</li>
                    </ul>
                </div>
                <div className="c2">
                    <div className="m1">PIC</div>
                    <div className="m1">PIC</div>
                    <div className="m1">PIC</div>
                    <div className="m1">PIC</div>

                    <div className="m1">PIC</div>
                    <div className="m1">PIC</div>
                    <div className="m1">PIC</div>
                    <div className="m1"><img src={require('./images/abc.jfif')} /></div>

                </div>
            </div>
        </>
    )
}
export default Mobile