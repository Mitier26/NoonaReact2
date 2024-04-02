import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    const authenticate = useSelector((state) => state.auth.authenticate);

    const dispatch = useDispatch();

    let navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/thunk/login');
    };

    const gotoLogout = () => {
        dispatch(authenticateAction.logout());
        navigate('/thunk');
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/thunk/?q=${keyword}`);
        }
    };

    const gotoHome = () => {
        navigate('/thunk');
    };

    return (
        <div className="nav-bar">
            <div>
                {authenticate == true ? (
                    <div className="login-button" onClick={gotoLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={gotoLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            <div className="nav-section">
                <img
                    className="logo-btn"
                    onClick={gotoHome}
                    width={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
                    alt=""
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <Dropdown className="menu-drop">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faBars} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {menuList.map((menu, index) => (
                            <Dropdown.Item key={index} href="#/action-1">
                                {menu}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <div className="input-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색..." onKeyUp={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
