import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0 '
          onClick={()=>{
            props.setVehicleFound(false)
          }}
        ><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i> </h5>
        <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>
        <div className='flex gap-2 flex-col justify-between items-center'>
            <img className='h-20' src='https://static.vecteezy.com/system/resources/thumbnails/001/193/929/small/vintage-car.png'/>
            <div className='w-full pt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className='text-lg ri-map-pin-user-fill'></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya talab, bhopal</p>
                  </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                  <i className='text-lg ri-map-pin-2-fill'></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11-A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Kankariya talab, bhopal</p>
                  </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                  <i className='text-lg ri-currency-line'></i>
                  <div>
                    <h3 className='text-lg font-medium'>193.20</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                  </div>
                </div>
            </div>

           
        </div>
        
    </div>
  )
}

export default LookingForDriver