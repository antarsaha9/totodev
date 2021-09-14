import React from 'react'
import styled from 'styled-components'

import loaderImage from "../../assets/images/loader.svg"
const LoaderWrapper = styled.div`
        position: fixed;
        z-index: 50000;
        background: #fff;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        display: ${props => props.display};
            img{
                position: absolute;
                left: 0;
                right: 0;
                text-align: center;
                top: 45%;
                margin: 0 auto;
            }
    `
const Loader = ({show}) => {
return(
<LoaderWrapper display={show ? "block" : "none"}>
    <img src={loaderImage.src} alt="img"/>
</LoaderWrapper>
)
}
 
export default Loader