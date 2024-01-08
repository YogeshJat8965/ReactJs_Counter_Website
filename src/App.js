import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[index,neww] = useState(0);

  function increment(){            // dont pass index in function as a argument.
    neww(index = index+1);
  }

  function Decrement(){
    neww(index -= 1);
  }

  function reset(){
    neww(index = 0);
  }

  return (
    <div className=' w-[100vw] h-[100vh] flex flex-col justify-center items-center  bg-[#344151] gap-10  '>
      
      <div className='text-slate-100 text-5xl text-[#0398d4]'><h1> Increment && Decrement </h1></div>

      <div className='flex flex-row gap-10 text-5xl bg-white p-2 px-5 '>

        <button className='border-e-2 pr-9 border-gray-400 ' onClick={increment}> + </button>
        <div>{index}</div>
        <button className='border-s-2 pl-9 border-gray-400 ' onClick={Decrement}> - </button>

      </div>

      <div>
        <button className='text-5xl bg-[#0398d4] text-white px-5 py-1 rounded' onClick={reset} >Reset</button>
      </div>

    </div>
  );
}

export default App;
