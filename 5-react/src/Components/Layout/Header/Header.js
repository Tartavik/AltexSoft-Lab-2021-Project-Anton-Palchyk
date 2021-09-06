import { NavLink } from "react-router-dom";
import UserAvatar from "../../UserAvatar/UserAvatar";
import header from "./Header.module.css";
import DrobDown from "../../DrobDown/DrobDown";
import { useState } from 'react';
import { useAuth } from "../../../context/useAuth";


const Header = (props) => {

    const { isSignedIn, user } = useAuth();

    const [stateDrobDown, setStateDrobDown] = useState(false);

    const changeStateDrobDown = () => {
        setStateDrobDown(!stateDrobDown)
    }

    return (
        <header className={header.header}>
            <a href='#/' className='logo'>LOGO</a>
            <div className={header.wrapperNav}>
                <NavLink to='/' className={header.btn}>Home</NavLink>
                {
                    isSignedIn ? (
                        <div onClick={changeStateDrobDown}>
                            <UserAvatar src={user !== undefined?user.image:'#'} width='50px' height='50px'/>
                            {stateDrobDown&&<DrobDown setStateModal={props.setStateModal} setTypeModalWindow={props.setTypeModalWindow}/>}
                        </div>    
                    ):(
                        <ul className={header.wrapperButton}>
                            <li className={header.btn}>
                                <NavLink to='/logIn' className={header.link}>Log in</NavLink>
                            </li>
                            <li className={header.btn}>
                                <NavLink to='/singUp' className={header.link}>Sing up</NavLink>
                            </li>
                        </ul>
                    )
                }
            </div>
        </header>
    );
}

export default Header;