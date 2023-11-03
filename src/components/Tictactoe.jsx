import './tictactoe.css'
import React, { useRef, useState } from 'react'
import cancel_icon from './Assets/cancel_icon.png'
import circle_icon from './Assets/circle_icon.png'


let data = ["","","","","","","","","","","","","","","",""];

function Tictactoe() {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);
    let box10 = useRef(null);
    let box11 = useRef(null);
    let box12 = useRef(null);
    let box13 = useRef(null);
    let box14 = useRef(null);
    let box15 = useRef(null);
    let box16 = useRef(null);

    let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16]

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2==0){
            e.target.innerHTML = `<img src='${cancel_icon}'>`
            data[num] = "x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src='${circle_icon}'>`
            data[num] = "o";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () =>{
        if(data[0]===data[1] &&  data[1]===data[2] && data[2]===data[3] && data[3]!==""){
            won(data[3]);
        }
        else if(data[4]===data[5] &&  data[5]===data[6] && data[6]===data[7] && data[7]!==""){
            won(data[7]);
        }
        else if(data[8]===data[9] &&  data[9]===data[10] && data[10]===data[11] && data[11]!==""){
            won(data[11]);
        }
        else if(data[12]===data[13] &&  data[13]===data[14] && data[14]===data[15] && data[15]!==""){
            won(data[15]);
        }
        else if(data[0]===data[4] &&  data[4]===data[8] && data[8]===data[12] && data[12]!==""){
            won(data[12]);
        }
        else if(data[1]===data[5] &&  data[5]===data[9] && data[9]===data[13] && data[13]!==""){
            won(data[13]);
        }
        else if(data[2]===data[6] &&  data[6]===data[10] && data[10]===data[14] && data[14]!==""){
            won(data[14]);
        }
        else if(data[3]===data[7] &&  data[7]===data[11] && data[11]===data[15] && data[15]!==""){
            won(data[15]);
        }
        else if(data[0]===data[5] &&  data[5]===data[10] && data[10]===data[15] && data[15]!==""){
            won(data[15]);
        }
        else if(data[3]===data[6] &&  data[6]===data[9] && data[9]===data[12] && data[12]!==""){
            won(data[12]);
        }
    }

    const won = (winner) =>{
        setLock(true);
        if(winner === "x"){
            titleRef.current.innerHTML = `Congratulations : <img src= ${cancel_icon}> wins`
        }
        else{
            titleRef.current.innerHTML = `Congratulations : <img src= ${circle_icon}> wins`
        }
    }

    const reset = () =>{
        setLock(false)
        data = ["","","","","","","","","",,"","","","","","",""];
        titleRef.current.innerHTML = 'Tic Tac Toe in<span>React</span>'
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe <span> React</span></h1>
        <div className='board'>
            <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}} ref={box1}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,1)}} ref={box2}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,2)}} ref={box3}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,3)}} ref={box4}></div>
            </div>

            <div className='row2'>
                <div className='boxes' onClick={(e)=>{toggle(e,4)}} ref={box5}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,5)}} ref={box6}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,6)}} ref={box7}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,7)}} ref={box8}></div>
            </div>

            <div className='row3'>
                <div className='boxes' onClick={(e)=>{toggle(e,8)}} ref={box9}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,9)}} ref={box10}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,10)}} ref={box11}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,11)}} ref={box12}></div>
            </div>  

            <div className='row4'>
                <div className='boxes' onClick={(e)=>{toggle(e,12)}} ref={box13}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,13)}} ref={box14}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,14)}} ref={box15}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,15)}} ref={box16}></div>
            </div>    
            

        </div>
        <button className='reset-button'onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default Tictactoe