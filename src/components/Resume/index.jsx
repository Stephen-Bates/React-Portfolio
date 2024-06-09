import SectionHeader from "../utils/SectionHeader"
import { Container } from "react-bootstrap"
import Skills from "./Skills"

const resumeLink = 'https://docs.google.com/document/d/1j5mqGO-YjwObkrAINcsfwiyrMO6UDxd7-qvI4uFxVK8/edit?usp=drive_link'

export default function Resume() {
    return (
        <Container className="px-4 py-5 my-5 bg-body-tertiary text-center">
            <SectionHeader text={'Resume'} />
            <p className="lead mb-4">
                You can download a copy of my resume
            </p>
            <a href={resumeLink} download>Here</a>
            <Container className="px-4 py-5 my-5 bg-body-tertiary text-center">
                <SectionHeader text={'Skills'} />
                <p className="lead mb-4">
                    List of skills:
                </p>
                {Skills.map(skill => (
                    <p>{skill}</p>
                ))}
            </Container>
        </Container>

    )
}