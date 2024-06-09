import { Link, useLocation } from 'react-router-dom';
import NavigationLink from './NavigationLink';

const pages = [
    { id: 0, name: "About", address: '/' },
    { id: 1, name: "Contact", address: '/Contact' },
    { id: 2, name: "Portfolio", address: '/Portfolio' },
    { id: 3, name: "Resume", address: '/Resume' },
];

export default function Navigation() {
    return (
        <ul>
            {pages.map(page => <NavigationLink key={page.id} pagename={page.name} address={page.address} />)}
        </ul>
    );
}