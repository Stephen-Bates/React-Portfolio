import SectionHeader from "../utils/SectionHeader"

export default function About() {
    return (
        <section className="px-4 py-5 my-5 text-center">
            <SectionHeader text={'About Me'} />
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    I'm a Fullstack developer who has been studying computers since early highschool.
                    In my early years, I would spend my free time indipendantly developing video games.
                    As I grew older, I became very interested in manufacturing and spent several years working in factories, learning everything I could about the trade.
                    Now, I find myself pulled back to where I always felt most comfortable, in the computer sciences.
                    I wonder, what new technologies I'll learn about next?
                </p>
            </div>
        </section>
    )
}