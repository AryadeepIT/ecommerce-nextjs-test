import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { BagContext } from "@/components/BagContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
  background: #22577A;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  svg{
    display: inline;    
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
    ${props => props.mobileNavActive ? `
      display: block;
    ` : `
      display: none;
    ` }
    gap: 15px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #22577A;


    @media screen and (min-width: 768px) {
      display: flex;
      position: static;
      padding: 0;
    }

`;

const NavLink = styled(Link)`
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
      padding: 0;
    }

`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px; 
  border: 0;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;


export default function Header() {
  const {bagProducts} = useContext(BagContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>

          <Logo href="/">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 128 128"
      >
        <path
          fill="#65878d"
          d="m95.84 41.06l-9.21.97l4.02-19.64a9.985 9.985 0 0 1 6.92-7.57l18.49-5.56c3.67-1.1 7.37 1.64 7.37 5.48c0 3.61-3.59 6.13-6.98 4.9l-2.57-.58l-10.36 3.07a6.019 6.019 0 0 0-4.13 4.34l-3.55 14.59zm-9.55 41.69L79.88 110l-7.79-2.75l4.8-24.5z"
        />
        <path fill="#65878d" d="M81.76 102H18.84v8.33h61.5z" />
        <path
          fill="#fac136"
          d="M1.95 48.08L9.36 84.2c.57 2.8 3.03 4.8 5.88 4.8h68.52a2 2 0 0 0 1.95-1.55l12.02-52.01c.31-1.33-.77-2.56-2.13-2.44L7.29 40.9a5.995 5.995 0 0 0-5.34 7.18zm13.95 1.09l4.26-.38a3.001 3.001 0 0 1 3.27 2.99v4.82c0 1.66-1.34 3-3 3h-4.48c-1.42 0-2.65-1-2.94-2.4l-.66-3.24a3.981 3.981 0 0 1 3.55-4.79zm38.21 18.42h5.68c1.66 0 3 1.34 3 3V77c0 1.66-1.34 3-3 3h-5.68c-1.66 0-3-1.34-3-3v-6.41c0-1.66 1.34-3 3-3zm5.68-8h-5.68c-1.66 0-3-1.34-3-3v-7.83c0-1.55 1.19-2.85 2.73-2.99l5.68-.51a3.001 3.001 0 0 1 3.27 2.99v8.34c0 1.66-1.34 3-3 3zm-16.68 11V77c0 1.66-1.34 3-3 3h-5.68c-1.66 0-3-1.34-3-3v-6.41c0-1.66 1.34-3 3-3h5.68c1.66 0 3 1.34 3 3zm-3-11h-5.68c-1.66 0-3-1.34-3-3v-6.07c0-1.55 1.19-2.85 2.73-2.99l5.68-.51a3.001 3.001 0 0 1 3.27 2.99v6.58c0 1.66-1.34 3-3 3zm45.74-12.74l-2.41 10.41a2.995 2.995 0 0 1-2.92 2.32h-6.73c-1.66 0-3-1.34-3-3V47c0-1.55 1.19-2.85 2.73-2.99l9.13-.82c2.04-.18 3.66 1.68 3.2 3.66zM75.01 80H72.8c-1.1 0-2-.9-2-2v-7.41c0-1.66 1.34-3 3-3h3.49c1.93 0 3.36 1.8 2.92 3.68l-1.3 5.64a4.01 4.01 0 0 1-3.9 3.09zm-59.26-9.44c-.32-1.54.86-2.98 2.43-2.98h2.25c1.66 0 3 1.34 3 3v6.93a2.48 2.48 0 0 1-2.48 2.48c-1.9 0-3.54-1.34-3.92-3.2l-1.28-6.23z"
        />
        <circle cx="75.54" cy="106.33" r="11" fill="#2f2f2f" />
        <circle cx="75.54" cy="106.33" r="5.13" fill="#65878d" />
        <circle cx="22.7" cy="106.33" r="11" fill="#2f2f2f" />
        <circle cx="22.7" cy="106.33" r="5.13" fill="#65878d" />
        <circle cx="118.59" cy="16.25" r="7.41" fill="#65878d" />
      </svg>
            
            
            
            
            
            wishMarket</Logo>

          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/checkout"}>Checkout ({bagProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />

          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
