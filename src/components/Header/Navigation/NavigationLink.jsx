import { Link } from "react-router-dom"

export default function NavigationLink({ pagename, address }) {
    return (
        <li>
            <Link to={address}>
                {pagename}
            </Link>
        </li>
    )
}