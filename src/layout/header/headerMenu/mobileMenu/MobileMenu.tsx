import React from "react";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'
export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={true}>
                {/*выше useState (хуки/true/false)*/}
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}></Menu>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

