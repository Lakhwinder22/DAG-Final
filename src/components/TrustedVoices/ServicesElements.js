import styled from "styled-components";

export const ServicesContainer = styled.div`
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: whites;
    padding: 50px 0;
    padding-top: 0px;
    padding-bottom:0px

    @media screen and (max-width: 768px) {
        min-height: 1100px;
    }

    @media screen and (max-width: 480px) {
        min-height: 1300px;
    }

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 20px 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        padding: 20px 50px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        //padding: 0 20px;
        padding: 20px 50px;
    }

`

export const ServicesCard = styled.div`
    background: white;
    display: flex;
    
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
     box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        
        transform: scale(1.1);
    }

`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 40px;
    
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ServicesH2 = styled.h2`
    font-size: 1.2rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-bottom: 10px;
    font-weight: 900;
    
    
`

export const ServicesP = styled.p`
    font-size: 1rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;

`
