import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, divideNumber, multiNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myOtherState = useSelector((state) => state.multTheNumber);
  const dispatch = useDispatch();
  return (
    <>
        <div className='container'>
            <h1>Increment/Decrement counter</h1>
            <h4>Using React and Redux </h4>

            <div className='quantity'>
               <a className='quantity__minus' title='Decrement'
               onClick={ () => dispatch(decNumber()) }> <span> - </span> </a>
                <input name='quantity' type="text" className='quantity__input' value={myState} />
               <a className='quantity__plus' title='Increment' 
               onClick={ () => dispatch(incNumber(5)) }> <span> + </span> </a>
            </div>
        </div>

        <div className='container'>
            <h1>Multiplication/Divide counter</h1>
            <h4>Using React and Redux </h4>

            <div className='quantity'>
               <a className='quantity__divide' title='divide'
               onClick={ () => dispatch(divideNumber(5)) }> <span> / </span> </a>
                <input name='quantity' type="text" className='quantity__input' value={myOtherState} />
               <a className='quantity__multiply' title='multiply' 
               onClick={ () => dispatch(multiNumber(5)) }> <span> * </span> </a>
            </div>
             
        </div>
    </>
  )
}

export default App
