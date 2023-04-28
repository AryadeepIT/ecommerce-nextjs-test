import { primary } from "@/lib/colors";
import styled, {css} from "styled-components";

export const ButtonStyle = css`
border:0;
    padding: 3px 8px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    
    svg{
        height: 16px;
        margin-right: 5px;
    }

    ${props => props.block && css`
        display: block;
        width: 100%;
    `}

    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
        
        
    `}

    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #000;
        border: 1px solid #064420;
        
    `}

    ${props => props.black && !props.outline && css`
        background-color: #000;
        color: #fff;
        
        
    `}

    ${props => props.black && props.outline && css`
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
        
    `}

    ${props => props.primary && !props.outline && css`
        background-color: ${primary}; 
        border: 1px solid ${primary};
        color: #fff;

    `}

    ${props => props.primary && props.outline && css`
        background-color: transparent; 
        border: 1px solid ${primary};
        color: ${primary};
        

    `}

    ${props => props.size === 'l' && css`
        font-size: 1.2 rem;
        padding: 10px 20px;
        svg{
            height: 20px;
        }
    `}

`;

const StyledButton =  styled.button`

    ${ButtonStyle}
    
`;

export default function Button({children, ...rest}){
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}