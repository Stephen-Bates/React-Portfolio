import PropTypes from 'prop-types'

function SectionHeader({ text }) {
    return (
        <h1 className="display-5 fw-bold text-body-emphasis">{text}</h1>
    )
}

SectionHeader.propTypes = {
    text: PropTypes.string
}

export default SectionHeader