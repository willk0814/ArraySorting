import logo from './logo.svg';
import Header from './components/Header'
import Body from './components/Body'
import { useState } from 'react'

function App() {

  // State Variables to hold the arr, the selected sorting algorithms
  const [arr, setArr] = useState([])
  const [arr_length, setArr_length] = useState([])
  const [sorting_algo, setSortingAlgo] = useState(['none_selected'])
  

  // Constamts for ceiling and floor - change these to change the min and max possible values that are generated within the random array
  const MIN = 500
  const MAX = 3
  

  // ---Event listeners for inputs from the navbar---
  const onSlide = () => {
    let slider = document.getElementById('length_slider')
    setArr_length(slider.value)
    // setArr_length(100)
    setArr(generateRandomArr(arr_length, MIN, MAX))
  }

  const onCheck = () => {
    console.log('On check called')
    let sorting_algo = document.querySelector('input[name = "sorting_algo"]:checked').value
    setSortingAlgo(sorting_algo)
  }

  const onClick = () => {
    console.log('On click called')
  }

  
  // ---Array Generation Functions---
  const generateRandomArr = (arr_length) => {
    let arr = [];
    for (var i = 0; i < arr_length; i++) {
        arr.push(generateRandomNumber());
    }
    return (arr);
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
  }
  

  // ---Sorting Algorithm Functions---


  return (
    <div className="App">
      <Header onSlide = { onSlide } onCheck = { onCheck} onClick = {onClick}/>
      <Body arr = { arr } arr_length = { arr_length } sorting_algo = { sorting_algo }/>
    </div>
  );
}

export default App;
