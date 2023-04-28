import { useState } from "react";
import styled from "styled-components"

    const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
    `;

    const BigImage = styled.img`
        max-width: 100%;
        max-height: 200px;
    `;


    const ImageButtons = styled.div`
        display: flex;
        gap: 10px;
        flex-grow: 0;
        margin-top: 10px;
    `;
    const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
        border-color: teal;
        opacity: 1;
    
    ` : `
        opacity: 0.7;
        border-color: transparent;
        `}
        
        border-radius: 5px;
        height: 40px;
        padding: 2px;
        cursor: pointer;
    `;

    const BigImageWrapper = styled.div`
        text-align: center;
    `;

export default function ProductImages({images}){
    const [activeImage, setActiveImage] = useState(images?.[0]);
    
    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage} />
            </BigImageWrapper>
            <ImageButtons>
                {images.map(image => (
                    <ImageButton 
                        key={image}
                        active={image===activeImage} 
                        onClick={() => setActiveImage(image)}>
                        <Image src={image} alt="" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}