import styled from 'styled-components'

export const ButtonContainer = styled.button `
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 0.05rem solid  var(--main-white);
    border-color: ${props => (props.cart ? "var(--main-yellow)" : "var(--main-white)")};
    background: transparent;
    font-size: 1.2rem;
    color: ${props=>(props.cart ? "var(--main-yellow) " : "var(--main-white) ")};
    border-radius: 0.5rem;
    position: relative;
    z-index:1;
    outline: none;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: left;
        transform: scaleX(0);
        background: ${props=>(props.cart ? "var(--main-yellow) " : "var(--main-white) ")};
        z-index:-1;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        border-radius: 0.4rem;

    }
    &.btn-bg{
        color: var(--main-white);
        background: var(--light-blue);
        border: 0.05rem solid  var(--light-blue);
        margin: 20px 10px;
    }
    &:hover{
        color: ${props=>(props.cart ? "var(--main-white) " : "var(--light-blue) ")};
        transition-delay: 0.1s;
    }
    &:hover::after{
        transform: scaleX(1);
        transform-origin: right;
    }
    @media screen and (max-width:400px){
        font-size: 1rem;
        padding: 0.5rem 0.8rem;
    }
` 