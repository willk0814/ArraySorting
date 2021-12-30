import PropTypes from 'prop-types'
import NavBar from './NavBar'

// --- Header Component ---
// This component exists to create the header of the page, including the title as well as the toolbar that acceps input at the top of the page

// This header will pass information upward to the app which will in turn hand it to the array sorting components; this component will pass the array length and the sorting algorithm(s) that have been selected
const Header = ({ title, onSlide, onCheck, onClick }) => {

    return (
        <div>
            <h1 id='title'>{title}</h1>
            <div id='toolbar'>
                <NavBar onSlide = {onSlide} onCheck = {onCheck} onClick ={onClick}/>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Array Sorting Visualizer'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
