import React from 'react'
import styled from 'styled-components'
import Fade, { Reveal } from 'react-reveal';

function Sections(props) {
    return (
        
        <Wrap bgImg={props.backgroundImg}>
            <Fade cascade>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade cascade>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftButtonText}
                        </LeftButton>
                        {props.rightButtonText &&
                            <RightButton>
                                {props.rightButtonText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
        
    )
}

export default Sections
const Wrap = styled.div`
    z-index:10;
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: ${props=>`url("/images/${props.bgImg}")`} ;
    display:flex;
    flex-direction:column;
    justify-content: space-between; //vertival alignment
    align-items:center;  //horizontal alignment
    // left:0;
    // right:0;
    top:20px;
`

const ItemText = styled.div`
    // position: fixed;
    padding-top: 10vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    // position: fixed;
    display:flex;
    text-aligned:center;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color: #2b2d30;
    height: 40px;
    width: 250px;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size: 12px;
    cursor: pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)` 
    // Inharit all css of leftButton
    background-color: white;
    opacity:0.75;
    color:black;
`

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation:animateDown infinite 1.5s; 
`

const Buttons = styled.div``