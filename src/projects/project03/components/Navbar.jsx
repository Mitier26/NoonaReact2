import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    let navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/brand/login');
    };

    const gotoLogout = () => {
        setAuthenticate(false);
        navigate('/brand');
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyword = event.target.value;
            navigate(`/brand/?q=${keyword}`);
        }
    };

    const gotoHome = () => {
        navigate('/brand');
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
                <div className="input-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색..." onKeyUp={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
