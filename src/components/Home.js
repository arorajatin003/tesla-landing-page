import React from 'react'
import styled from 'styled-components'
import Sections from './Sections'
function Home() {
    
    return (
        <Container>
            <Sections 
                title="Model S"
                description="Order online for touchless Delivery"
                backgroundImg="model-s.jpg"
                leftButtonText="Custom order"
                rightButtonText="Existing inventory"
            /> 
            <Sections 
                title="Model Y"
                description="Order online for touchless Delivery"
                backgroundImg="model-y.jpg"
                leftButtonText="Custom order"
                rightButtonText="Existing inventory"
            /> 
            <Sections
                title="Model 3"
                description="Order online for touchless Delivery"
                backgroundImg="model-3.jpg"
                leftButtonText="Custom order"
                rightButtonText="Existing inventory"
            /> 
            <Sections
                title="Model X"
                description="Order online for touchless Delivery"
                backgroundImg="model-x.jpg"
                leftButtonText="Custom order"
                rightButtonText="Existing inventory"
            />    
            <Sections
                title="Lowest Cost Solar Panels in America"
                description="Money-back gurarantee"
                backgroundImg="solar-panel.jpg"
                leftButtonText="Order now"
                rightButtonText="Learn more"
            />  
            <Sections
                title="Solar for new Roofs"
                description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftButtonText="Order now"
                rightButtonText="Learn more"
            />      
            <Sections
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftButtonText="Shop now"
                rightButtonText=""
            />             
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    width: 100vw;
`