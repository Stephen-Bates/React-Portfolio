import SectionHeader from "../utils/SectionHeader"
import { Container } from "react-bootstrap"
import ProjectList from "./ProjectList"
import Project from "./Project"

export default function Portfolio() {
    return (
        <Container className="px-4 py-5 my-5 bg-body-tertiary text-center">
            <SectionHeader text={'Portfolio'} />
            <p className="lead mb-4">
                These are some of the projects I've worked on
            </p>
            <Container className="col-lg-6 mx-auto">
                {ProjectList.map(project => (
                    <Project title={project.title} description={project.description} img={project.img} address={project.address} />
                ))}
            </Container>
        </Container>
    )
}