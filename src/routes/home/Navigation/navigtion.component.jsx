import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import './navigation.styles.scss';
import CartIcon from '../../../components/cart-icon/cart-icon.component';
import { UserContext } from '../../../contexts/user.context';
import { ReactComponent as CrownLogo } from './crown.svg';
import { signOutUser } from './../../../utils/firebase/firebase.utils.js'
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component';
import { CartContext, CartProvider } from '../../../contexts/cart.context';



const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='Navigation'>
                <Link className='Logo-container' to="/">
                    <CrownLogo className='Logo' />
                </Link>
                <div className='Nav-links-container'>
                    <Link className='Nav-Link' to='/Shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='Nav-Link' onClick={signOutUser} >SignOut</span>)
                            : (<Link className='Nav-Link' to='/auth'>
                                SIGN IN
                            </Link>
                            )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />

        </Fragment>
    )
};

export default Navigation;