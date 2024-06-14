import PropTypes from 'prop-types'
import { Card } from "react-bootstrap"

function Project({ title, description, img, address }) {
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

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    address: PropTypes.string,
}

export default Project