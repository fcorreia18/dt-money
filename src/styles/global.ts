import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    :root{
        --background:#f0f2f5;
        --red:#E52E4D;
        --green:#33CC95;
        --blue:#5429CC;

        --blue-light:#6933FF;

        --text-title:#363F5F;
        --text-body:#969CB3;


        --shape:#ffffff;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box
    }
    html{
        @media(max-width:1800px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
        font-family: "poppins", "sans-serif";
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }
    button{
        cursor:pointer;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        display:flex;
        justify-content:center;
        align-items:center;

    }
    .react-modal-content{
        position:relative;
        width:100%;
        max-width:576px;
        background: var(--background);
        padding: 3rem;
        border-radius:0.25rem;


        .close-button{
            color: var(--text-body);
            display:block;
            background: none;
            border:0;
            width: 100%;
            text-align:right;
            transition: filter 0.2s;

            &:hover{
                filter:brightness(0.8)
            }
        }
    }
`
