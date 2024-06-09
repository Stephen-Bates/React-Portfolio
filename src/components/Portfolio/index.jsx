import SectionHeader from "../utils/SectionHeader"

export default function Portfolio() {
    return (
        <section className="px-4 py-5 my-5 text-center">
            <SectionHeader text={'Portfolio'} />
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    These are some of the projects I've worked on
                </p>
            </div>
        </section>
    )
}