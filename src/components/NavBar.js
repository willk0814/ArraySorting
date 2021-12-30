// Props:
//  - onSlide - event handler for when the slide, is used sets the slider in the main method
//  - onClick - event handler for when the button is clicked, sets the sorting algo in the main state

const NavBar = ( {onSlide, onCheck, onClick} ) => {
    return (
        <div>
            <label for="length_slider" id="slider_label">Drag to select array size:</label>
            <input type="range" min="3" max="150" value="75" id="length_slider" onInput = {onSlide}></input>
            <label for="length_slider" id="length_label"></label>
            <input type="radio" name="sorting_algo" value="merge" id="Merge" onInput = {onCheck}></input>
            <label for="Merge">Merge</label>
            <input type="radio" name="sorting_algo" value="bubble" id="Bubble" onInput = {onCheck}></input>
            <label for="Bubble">Bubble</label>
             <input type="radio" name="sorting_algo" value="quick" id="Quick" onInput = {onCheck}></input>
            <label for="Quick">Quick</label>
            <input type="radio" name="sorting_algo" value="heap" id="Heap" onInput = {onCheck}></input>
            <label for="Heap">Heap</label>
            <button name="sort" onClick= { onClick } id="sort">Sort</button>
        </div>
    )
}

export default NavBar
