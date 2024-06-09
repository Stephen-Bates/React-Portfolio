import { Card } from "react-bootstrap"

export default function ProjectCard({ title, description, img, address }) {
    return (
        <a href={address} target="_blank" style={{ textDecoration: 'none' }}>
            <Card className="m-3 bg-primary lead" >
                <Card.Img src={img} style={{ height: '20rem', objectFit: 'cover', objectPosition: '50% 0' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}