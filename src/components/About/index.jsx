import SectionHeader from "../utils/SectionHeader"
import { Container } from "react-bootstrap"

export default function About() {
    return (
        <Container className="px-4 py-5 my-5 rounded-5 shadow bg-secondary text-center">
            <SectionHeader text={'About Me'} />
            <div className="col-lg-6 mx-auto lead">
                <p className="mb-4">
                    I&apos;m a Fullstack developer who has been studying computers since early highschool.
                    In my early years, I would spend my free time independently developing video games.
                    As I grew older, I became very interested in manufacturing and spent several years working in factories, learning everything I could about the trade.
                    Now, I find myself pulled back to where I always felt most comfortable, in the computer sciences.

                </p>
                <p>
                    I wonder, what new technologies I&apos;ll learn about next?
                </p>
            </div>
        </Container>
    )
}