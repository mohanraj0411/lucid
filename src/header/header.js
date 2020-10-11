import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

const Link = ( { className, href, children } ) => (
    <a className={ className } href={ href }>
        {children }
    </a>
);

const StyledLink = styled(Link)`
    display: block;
    padding: .5rem 0;
    color: #fffefe;
    @media (min-width: 992px){
        padding-right: 1.2rem;
        padding-left: 1.2rem;
    }

    &.active, &:hover{
        position: relative;
        outline: none;
        color: #fff;
        text-decoration: none;
        &:before{
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;left: 0;
        }
        &:after{
            content: '';position: absolute;width: 45%;height: 2px;background-color: #008ed6;bottom: -2px;right: 0;
        }
    }
`

export default class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {sticky: false};
    }

    handleScroll = () => {
        this.setState({sticky: true})
        if (window.scrollY === 0) {
            this.setState({sticky: false})
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <Navbar expand="lg" fixed="top" variant="light" className={this.state.sticky ? "sticky" : ""}>
                <Container fluid>
                    <Navbar.Brand href="/"><img src={ require('../assets/lucid.svg')} alt="" style={{width:75}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <StyledLink className="active" href="#home">Home</StyledLink>
                            <StyledLink className="" href="#Features">Features</StyledLink>
                            <StyledLink className="" href="#Features">About</StyledLink>
                            <StyledLink className="" href="#Features">Testimonials</StyledLink>
                            <StyledLink className="" href="#Features">Pricing</StyledLink>
                            <StyledLink className="" href="#Features">Contact</StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
