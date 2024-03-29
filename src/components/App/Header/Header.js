import React from 'react';
import './Header.css';


const Header = ({headTitle , headerClicked}) =>{
   
    return(
        <div className="header-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            className={`header-img  ${headerClicked ? 'head-image-expanded' :'head-image-contracted'}`}
            alt="background-img"/>
            <h1 
            className={`header-text  
            ${headerClicked ? 'head-text-expanded' :'head-text-contracted'}`}>
                {headTitle}
            </h1>

        </div>
    )
}

export default Header;
