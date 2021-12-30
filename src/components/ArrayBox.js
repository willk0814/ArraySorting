import ArrayBar from './ArrayBar'

const ArrayBox = ({ arr, length }) => {
    // const renderOutput = (arr) => {
    //     let tmp_arr = arr.arr; 
    //     // console.log(tmp_arr.length)
    //     let renderedOuput = [];
    //     for (let i = 0; i < tmp_arr.length; i++){
    //         let tmp_bar = document.createElement('div');
    //         tmp_bar.className = '.arr';
    //         tmp_bar.id = arr[i];
    //         tmp_bar.style.height = "arr[i]px";
    //         renderedOuput.push(tmp_bar);
    //     }
    //     return renderedOuput;
    // }

    
    
    return (
        <>
            {arr.map(bar => <ArrayBar value = {bar}/>)}
        </>
    )
}

export default ArrayBox
