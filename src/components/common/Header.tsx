import React from "react";

interface HeaderProps {
    mainTitle: string;
    secondTitle: string;
}

const Header = (props: HeaderProps) => {
    const { mainTitle, secondTitle } = props;

    return (
        <header>
            <img alt="logo" src="assets/images/logo-full.svg" />
            <h1>
                {mainTitle}
            </h1>
            <h3>
                {secondTitle}
            </h3>
        </header>
    );
}

export default Header;