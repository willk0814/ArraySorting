import ArryBox from './ArrayBox'

// --- Body Compnent ---
// This component needs to accpet the array, the sorting algorithm, as well as the number of sorting algorithms accordingly

const Body = ({ arr, arr_length, sorting_algo }) => {
    return (
        <div>
            <div id='out_container'>
                <p>Length: {arr_length}</p> <p>Sorting Algo(s): {sorting_algo}</p>
                <ArryBox arr={ arr } length = {arr.length}/>
            </div>
        </div>
    )
}

export default Body
