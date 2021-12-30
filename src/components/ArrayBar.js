
const ArrayBar = ({ value, length }) => {

    return (
        <div className = 'arr' id = {value} style={{
            height: `${value}px`,
            width: `${1/length}px`
        }}>
            {value}
        </div>
    )
}

export default ArrayBar
