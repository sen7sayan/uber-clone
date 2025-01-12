import React from 'react'


const LocationSearchPanel = (props) => {
 
  const  locations = [
    '2/14 , kolkata , wb',
    '2/14 , kolkata , wb',
    '2/14 , kolkata , wb'
  ]
  return (
    <div>
      {
        locations.map(function(elem,idx){
          return  <div key={idx}
          onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }}
          
          className='flex gap-4 border-2  p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-fill"></i></h2>
              <h4 className='font-medium'>{elem}</h4>
          </div>;
        })
      }
       
    </div>
  )
}

export default LocationSearchPanel