import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import '../App.css';
import './Resume.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// library.add(fas, fab)

const data = require('../data/resume.json');

const Skills = () => {
    return (
        <>
            <h5>Skills</h5>

            {data.skills.map((s, i) => {
                return (<div key={i}>{s[0]} ( {s[1]} )</div>)
            })}
        </>
    )
}

const Education = () => {
    return (
        <>
            <h2 className="border border-5">Education</h2>
            <ul>
                {data.education.map((s, i) => {
                    return (<li key={i}>{s}</li>)
                })}
            </ul>
        </>
    )
}

const ExpItem = ({ item }) => {
    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col sm={3}>{item.start} to {item.end}</Col>
                    <Col sm={3}><h5>{item.client}</h5></Col>
                    <Col>{item.location}</Col>
                </Row>
                <Row>
                    <Col className="ms-5">{item.tech_used}</Col>
                </Row>
            </Container>
        </>
    )
}

const Experience = () => {
    return (
        <>
            <h2><b>Experience</b></h2>
            {data.experience.map((item, i) => {
                return (
                    <ExpItem item={item} key={i} />
                )
            })}
        </>
    )
}

const Summary = ({name}) => {
    if (!name) { name = "basic1" }
    
    return (
        <>
            <h2><b>Summary</b></h2>
            {data.summary[name].map((line, i) => { 
                return(<p key={i}>{line}</p>);
            })

            }
        </>
    )
}

const Title = () => {
    return (
        <>
            <div className="title">{data.contact_info.first_name} {data.contact_info.last_name}</div>
        </>
    )
}

const Contact = () => {
    return (
        <>
            <h5>Contact</h5>
            <div><FontAwesomeIcon icon="fa-solid fa-envelope" color="black" size="1x" /> {':'} {data.contact_info.email}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-phone" color="black" size="1x" /> {':'} {data.contact_info.phone}</div>
            <div><FontAwesomeIcon icon="fa-solid fa-house-user" color="black" size="1x" /> {':'} {data.contact_info.address}</div>
        </>
    )
}

const Links = () => {
    return (
        <>
            <h5>Links</h5>
            <Stack direction="horizontal" gap={3}>
                <div><a href={data.links.web.url}>
                    <FontAwesomeIcon icon="fa-solid fa-house-signal" color="black" size="1x" />
                </a></div>
                <div><a href={data.links.linkedin.url}>
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" color="black" size="1x" />
                </a></div>
                <div><a href={data.links.github.url}>
                    <FontAwesomeIcon icon="fa-brands fa-square-github" color="black" size="1x" />
                </a></div>
            </Stack>
        </>
    )
}


const Resume = () => {

    return (
        <Container className='resume'>
            <Row>
                <Col>
                    <div className="border-bottom border-5 p-1 mb-5 bg-body-tertiary">
                        <Title />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <div className="mb-4"><Contact /></div>
                    <div className="mb-4"><Skills /></div>
                    <div><Links /></div>
                </Col>
                <Col>
                    <Summary />
                    <Experience />
                    <Education />
                </Col>
            </Row>
            
        </Container>
    );
 };

export default Resume;