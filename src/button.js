
import { Link } from 'react-router-dom'

const Button = () => {
    return (
        <>

            <button className='button'><Link className='link' to="/card"> add to card</Link>
            </button>

        </>
    );
}
export default Button