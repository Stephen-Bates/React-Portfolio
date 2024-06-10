import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='lead bg-secondary'>
            {/* but not really */}
            <div className="flex">
                <a href="https://linkedin.com/in/stephen-bates-3b751a86">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Stephen-Bates">
                    <FaGithub />
                </a>
                <a href="https://stackoverflow.com/users/25501184/stephen-bates">
                    <FaStackOverflow />
                </a>
            </div>
            <p className="px-auto text-primary mx-auto align-middle">Stephen Bates &copy; {new Date().getFullYear()}</p>

        </footer>
    );
}