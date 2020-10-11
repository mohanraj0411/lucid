import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const StyledButtonGroup = styled.div`
    h3 {
        color: #fff;
        font-weight: 300;
        strong {
            font-weight: 700;
        }
    }
    & .btn-download {
        border-radius: 3.8px;box-shadow: 0 0 3px 0 rgba(3, 3, 3, .1);background-color: #008ed6;text-transform: uppercase;font-size: 16px;
    }
    & .btn-features {border-radius: 3.8px; border: solid 1px rgba(255, 255, 255, 0.2);color: #fff;text-transform: uppercase;font-size: 16px;
        &:hover {
            background-color: #008ed6;
            border-color: #008ed6;
        }
        + .btn{
            margin-left: 20px
        }
    }
`

export default class downloadContainer extends Component {
    render() {
        return (
            <StyledButtonGroup className="row">
                <Col className="offset-sm-1">
                    <h3><strong>Like what you see?</strong> Get this great theme now!</h3>
                </Col>
                <Col sm={4}>
                    <Button variant="outline-primary" size="lg" className='btn-features'>view features</Button>
                    <Button variant="primary" size="lg" className='btn-download'>download now</Button>
                </Col>
            </StyledButtonGroup>
        )
    }
}
