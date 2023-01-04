import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setValueLenResta, setValueLenSuma, setValueBreResta, setValueBreSuma } from '../store/slice/clockSlice'
const Clock = () => {
    const {valueLen, valueBre} = useSelector(state => state.clock)
    const dispatch = useDispatch()
  return (
    <div className='main'>
    <div className='clock-main'>
        <div className='functions'>
            <h1 className='text-center'>25+5 Clock</h1>
            <div className='buttons'>
                <div className='buttons-break'>
                <div className='button-2'>
                    <div className='text-center'>
                        <button className='btn decrement' onClick={()=>{
                            dispatch(setValueBreResta())
                        }}><i className='fa fa-arrow-down fa-2x'></i></button>
                        <span>{valueBre}</span>
                        <button className='btn increment' onClick={()=>{
                            dispatch(setValueBreSuma())
                        }}><i className='fa fa-arrow-up fa-2x'></i></button>
                    </div>
                    <h4>Session break</h4>
                    </div>
                </div>
                <div className='buttons-length'>
                    <div className='button-2'>
                    <div className='text-center'>
                        <button className='btn decrement' onClick={()=>{
                            dispatch(setValueLenResta())
                        }}><i className='fa fa-arrow-down fa-2x'></i></button>
                        <span>{valueLen}</span>
                        <button className='btn increment' onClick={()=>{
                            dispatch(setValueLenSuma())
                        }}><i className='fa fa-arrow-up fa-2x'></i></button>
                    </div>
                    <h4>Session length</h4>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='clock'>
            <div className='card'>
                <div className='card-body'>
                <h2 className='card-title text-center'>Session</h2>
                <div className='timer text-center' id='timer1'>{valueLen}:00</div>
                </div>
            </div>
        </div>
        <div className='buttons-plays'>
            <button className='btn' onClick={()=>{
                let tiempo = document.getElementById("timer1")
                
                const arr = []
                let h = valueLen
                while(h>-1){
                    for(let i=59; i > -1; i--){
                        arr.push(i)
                    }
                    h--;
                }
                
               
               let j = valueLen-1
               for(let i =0; i< 60*valueLen; i++){
                
                    (function(i){
                        
                        setTimeout(()=>{
                            
                            tiempo.innerHTML = j+":"+arr[i]
                            if(arr[i]===0){
                                j--;
                            }
                        },1000*(i+1))
                    })(i)
                    
               }

            }}><i className='fa fa-play fa-2x'></i></button>
            <button className='btn'><i className='fa fa-refresh fa-2x'></i></button>
            
        </div>
    </div>
    </div>
  )
}

export default Clock