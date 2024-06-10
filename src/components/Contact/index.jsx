import SectionHeader from "../utils/SectionHeader"
import ContactForm from "./ContactForm"
import { Container } from "react-bootstrap"

export default function Contact() {
    return (
        <Container className="px-4 py-5 my-5 rounded-5 shadow bg-secondary text-center" >
            <SectionHeader text={'Contact Me'} />
            <ContactForm />
        </Container>
    )
}