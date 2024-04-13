import React, { useState, useEffect } from "react";
import './SortingVisualization.css'
import SortingVisualization from "./SortingVisualization";
export default function ArraySorting()
{
    const [Array, setArray] = useState([])

    function resetArray()
    {
        const arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push(randomDataInput(20, 550))
        }
        setArray(arr);
    }

    useState(() =>{
        resetArray()
    }, []);

    function randomDataInput(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function BubbleSort() {
    //     const sortedArray = [...Array];
    //     const length = sortedArray.length;

        
        
    //     for (let i = 0; i < length - 1; i++) {
    //         for (let j = 0; j < length - 1; j++) {
    //             if (sortedArray[j] > sortedArray[j + 1]) {
    //                 const temp = sortedArray[j];
    //                 sortedArray[j] = sortedArray[j + 1];
    //                 sortedArray[j + 1] = temp;
    //                 setArray(sortedArray)
    //             }
    //         }
    //     }
        
    // }

    function BubbleSort() {
        const length = Array.length;
        const sortedArray = [...Array];
    
        let i = 0;
        let j = 0;
    
        const sortStep = () => {
            if (i < length - 1) {
                if (j < length - 1 - i) {
                    if (sortedArray[j] > sortedArray[j + 1]) {
                        const temp = sortedArray[j];
                        sortedArray[j] = sortedArray[j + 1];
                        sortedArray[j + 1] = temp;
                        setArray([...sortedArray]); // Update the state with the current step of sorting
                    }
                    j++;
                    setTimeout(sortStep, 50); // Call sortStep after 1 second
                } else {
                    j = 0;
                    i++;
                    setTimeout(sortStep, 50); // Call sortStep after 1 second
                }
            }
        };
    
        sortStep(); // Start the sorting process
    }
    
    function InsertionSort() {
        const length = Array.length;
        const sortedArray = [...Array];
    
        let i = 1;
        let j = 0;
    
        const sortStep = () => {
            if (i < length) {
                const key = sortedArray[i];
                j = i - 1;
                while (j >= 0 && sortedArray[j] > key) {
                    sortedArray[j + 1] = sortedArray[j];
                    j--;
                }
                sortedArray[j + 1] = key;
                setArray([...sortedArray]); // Update the state with the current step of sorting
                i++;
                setTimeout(sortStep, 1000); // Call sortStep after 1 second
            }
        };
    
        sortStep(); // Start the sorting process
    }
    

    function SelectionSort() {
        const length = Array.length;
        const sortedArray = [...Array];
    
        let i = 0;
    
        const sortStep = () => {
            if (i < length - 1) {
                let minIndex = i;
                for (let j = i + 1; j < length; j++) {
                    if (sortedArray[j] < sortedArray[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    const temp = sortedArray[i];
                    sortedArray[i] = sortedArray[minIndex];
                    sortedArray[minIndex] = temp;
                    setArray([...sortedArray]); // Update the state with the current step of sorting
                }
                i++;
                setTimeout(sortStep, 1000); // Call sortStep after 1 second
            }
        };
    
        sortStep(); // Start the sorting process
    }
    

    function MergeSort() {
        const length = Array.length;
        const sortedArray = [...Array];
    
        const merge = (left, right) => {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;
    
            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
    
            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        };
    
        const mergeSortRec = (arr) => {
            const arrLength = arr.length;
            if (arrLength <= 1) {
                return arr;
            }
    
            const mid = Math.floor(arrLength / 2);
            const left = arr.slice(0, mid);
            const right = arr.slice(mid);
    
            return merge(mergeSortRec(left), mergeSortRec(right));
        };
    
        const sortStep = () => {
            const sorted = mergeSortRec(sortedArray);
            setArray([...sorted]); // Update the state with the current step of sorting
        };
    
        sortStep(); // Start the sorting process
    }
    

    return(
        <>
            <SortingVisualization Array = {Array}/>
            <button className="Btn" onClick={resetArray}>Reset The Array</button>
            <button className="Btn" onClick={BubbleSort}>Bubble Sort</button>
            <button className="Btn" onClick={InsertionSort}>Insertion Sort</button>
            <button className="Btn" onClick={SelectionSort}>Selection Sort</button>
            <button className="Btn" onClick={MergeSort}>Merge Sort</button>
        </>
    )
}

