import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/counter/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [burgerState, setBurgerStatus] = useState(false);
    const [color, setColor] = useState(true);
    const cars = useSelector(selectCars);

    const listenScrollEvent = e => {
        if (window.scrollY > 0) {
          setColor(false)
        } else {
          setColor(true)
        }
    }

    window.addEventListener('scroll', listenScrollEvent)
    return (
        <Container bgColor={color}>
            <a>
                <img src="/images/logo.svg" alt="Logo"/>
            </a>
           <Menu>
               {cars && cars.map((car,index)=>(
                   <p><a key={index} href="#">{car}</a></p>
               ))}
               <p><a href="#">Solar Roof</a></p>
               <p><a href="#">Solar Panels</a></p>
           </Menu>
           <RightMenu>
               <p><a href="#">Shop</a></p>
               <p><a href="#">Tesla Account</a></p>
                <CustomMenu onClick={()=> setBurgerStatus(true)} />
           </RightMenu> 
            <BurgerNav show={burgerState}>
                <CloseWrap>
                    <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrap>
                {cars && cars.map((car,index)=>(
                   <li><a key={index} href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadastar</a></li>
            </BurgerNav>
        
        </Container>

    )
}

export default Header

const Container = styled.div`
    z-index:1;
    min-height:60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    max-width:100vw; 
    min-width:100vw; 
    // animation:; ${props => props.bgColor?'animateDown infinite 1.5s':''};
    background-color: ${props => props.bgColor?'transparent':'white'}
    // transition-delay: 1s;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;
    p{
        font-weight:600;
        text-transform:uppercase;
        padding: 0 10px;
        flex-wrap:  no-wrap;
    }
    @media (max-width:760px){
        display: none;
    }
`

const RightMenu=styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    p{
        font-weight:600;
        text-transform:uppercase;
        margin-right: 10px;
        flex-wrap:  no-wrap;
    }
    @media (max-width:450px){
        p{
            display:none;
        }
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
     
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:320px;
    z-index:16;
    list-style:none;
    padding: 20px;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        
        a{
            font-weight: 600;
        }
    }
    
`
const CloseWrap = styled.div`
   display:flex;
   justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`