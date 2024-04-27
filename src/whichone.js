import Bike from "./bike";
import Car from "./car";
import Mobile from "./mobile";
const Setvalue = ({ x }) => {
    if (x === 0) {
        return (
            <Bike></Bike>
        );
    }
    else if (x === 1) {
        return (
            <Mobile></Mobile>
        );
    } else if (x === 2) {
        return (
            <Car></Car>
        );
    }
}
export default Setvalue