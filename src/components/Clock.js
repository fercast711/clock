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
            <h1 className='text-center'>Alarm Clock</h1>
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
                <h2 className='card-title text-center' id="title-card">Session</h2>
                <div className='timer text-center' id='timer1'>{valueLen}:00</div>
                </div>
            </div>
        </div>
        <div className='buttons-plays'>
            <button className='btn' onClick={()=>{
                let tiempo = document.getElementById("timer1")
                let title = document.getElementById("title-card")
                let sound = new Audio();
                sound.src = "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"

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
                        if(j === -1){
                            sound.play()
                            title.innerHTML = "Break"
                            const arr1 = []
                            let h1 = valueBre
                            while(h1 >-1){
                                for(let i=59; i > -1; i--){
                                    arr1.push(i)
                                }
                                h1--;
                            }
                
                           let j1 = valueBre -1
                
                           for(let i =0; i< 60*valueBre; i++){
                            (function(i){
                                setTimeout(()=>{
                                        
                                    tiempo.innerHTML = j1+":"+arr1[i]
                                    if(arr1[i]===0){
                                        j1--;
                                    }
                                    
                                },1000*(i+1))
                                setTimeout(()=>{
                                    sound.play()
                                },60000*valueBre)
                            })(i)
                       }
                           }
                    },1000*(i+1))

                })(i)
           }
            }}><i className='fa fa-play fa-2x'></i></button>
            <button className='btn' id="reset" onClick={()=>{
                 window.location.reload()
            }}><i className='fa fa-refresh fa-2x'></i></button>
            
        </div>
    </div>
    </div>
  )
}

export default Clock