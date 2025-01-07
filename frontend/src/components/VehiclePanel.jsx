import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0 '
          onClick={()=>{
            props.setVehiclePanelOpen(false)
          }}
        ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i> </h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
       <div onClick={()=>{
        props.setConfirmRidePanelOpen(true)
       }} className='flex border-2 active:border-black  mb-2 rounded-xl w-full  p-3 items-center justify-between'>
        <img className='h-12' src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL3AtM2QtY2FyLWNoaW0tMDA1LTEtam9iMTc1MC5wbmc.png' alt='' />
        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs'> Affodable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>193.20</h2>
       </div>


       <div  onClick={()=>{
        props.setConfirmRidePanelOpen(true)
       }} className='flex border-2 active:border-black mb-2 rounded-xl w-full  p-3 items-center justify-between'>
        <img className='h-10' src='https://static.vecteezy.com/system/resources/thumbnails/001/193/929/small/vintage-car.png' alt='' />
        <div className='w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs'> Affodable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>193.20</h2>
       </div>

       <div  onClick={()=>{
        props.setConfirmRidePanelOpen(true)
       }} className='flex border-2 active:border-black mb-2 rounded-xl w-full  p-3 items-center justify-between'>
        <img className='h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt='' />
        <div className=' w-1/2'>
          <h4 className='font-medium text-base'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
          <h5 className='font-medium text-sm'>2 mins away</h5>
          <p className='font-normal text-xs'> Affodable, compact rides</p>
        </div>
        <h2 className='text-lg font-semibold'>193.20</h2>
       </div>
    </div>
  )
}

export default VehiclePanel