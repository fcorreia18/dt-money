import styled from "styled-components";


export const Container = styled.header`
    background:var(--blue);
`



export const Content = styled.div`
    max-width:1128px;
    margin:0 auto;
    padding: 2rem 1rem 10rem;
    color:#fff;


    display:flex;
    align-items: center;
    justify-content:space-between;

    span{
        display:flex;
        align-items: center;
        gap:4px;
        font-size:1.5rem;
    }
    
    button{
        background: var(--blue-light);
        padding: 1rem 1rem;
        color: #ffffff;
        border:0;
        font-size:1rem;
        font-family:"poppins", "sans-serif";
        border-radius:0.25rem;
        transition:filter 0.6s;

        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
    }

`