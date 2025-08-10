import React from 'react'

const Content = () => {
  return (
    <div className='content'>    
       <div className='bus-moving'>
            <div className='bus'>
                <div className='bus-glass'></div>
                <div className='busName'><h3>green bus</h3></div>
                <div className='tyre'>
                    <div className='left-tyre'></div>
                    <div className='right-tyre'></div>
                </div>
            </div>
        </div>
        <div className='content-moving'>
            <p>
               <span> welcome to green bus . com</span>
                Book your ride. Breathe easy. Travel green.
                Fast, affordable, and eco-conscious bus travel across the country.
                🌍 Less emissions. 💺 More comfort. ✅ 100% hassle-free booking.
                
            </p>

        </div>

    </div>
  )
}

export default Content;