import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const pages = [
    { name: "About", address: '/' },
    { name: "Contact", address: '/Contact' },
    { name: "Portfolio", address: '/Portfolio' },
    { name: "Resume", address: '/Resume' },
];

export default function Navigation() {
    return (
        pages.map(page => (
            <LinkContainer to={page.address}>
                <Nav.Link>{page.name}</Nav.Link>
            </LinkContainer>
        ))
    );
}