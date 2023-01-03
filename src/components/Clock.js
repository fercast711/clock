import React from 'react'

const Clock = () => {
  return (
    <div className='main'>
    <div className='clock-main'>
        <div className='functions'>
            <h1 className='text-center'>25+5 Clock</h1>
            <div className='buttons'>
                <div className='buttons-break'>
                <div className='button-2'>
                    <div className='text-center'>
                        <button className='btn decrement'><i className='fa fa-arrow-down fa-2x'></i></button>
                        <span>5</span>
                        <button className='btn increment'><i className='fa fa-arrow-up fa-2x'></i></button>
                    </div>
                    <h4>Session break</h4>
                    </div>
                </div>
                <div className='buttons-length'>
                    <div className='button-2'>
                    <div className='text-center'>
                        <button className='btn decrement'><i className='fa fa-arrow-down fa-2x'></i></button>
                        <span>25</span>
                        <button className='btn increment'><i className='fa fa-arrow-up fa-2x'></i></button>
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
                <div className='timer text-center'>25:00</div>
                </div>
            </div>
        </div>
        <div className='buttons-plays'>
            <button className='btn'><i className='fa fa-play fa-2x'></i></button>
            <button className='btn'><i className='fa fa-refresh fa-2x'></i></button>
            
        </div>
    </div>
    </div>
  )
}

export default Clock