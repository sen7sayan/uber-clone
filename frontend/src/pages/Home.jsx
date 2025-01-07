import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const submitHandler = (e) =>{
    e.preventDefault();
  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height : '70%',
        opacity:1,
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height : '0%',
        opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(0)'
       })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform : 'translateY(100%)'
       })
    }
  },[vehiclePanelOpen])

  useGSAP(function(){
    if(confirmRidePanelOpen){
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(0)'
       })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform : 'translateY(100%)'
       })
    }
  },[confirmRidePanelOpen])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to( vehicleFoundRef.current,{
        transform : 'translateY(0)'
       })
    }else{
      gsap.to( vehicleFoundRef.current,{
        transform : 'translateY(100%)'
       })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to( waitingForDriverRef.current,{
        transform : 'translateY(0)'
       })
    }else{
      gsap.to( waitingForDriverRef.current,{
        transform : 'translateY(100%)'
       })
    }
  },[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
      <div onClick={()=>{
        setVehiclePanelOpen(false)
      }} className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt=''/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>
         <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
         }} className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
         <h4 className='text-3xl font-semibold'>
            Find a trip
          </h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input 
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3' 
              type='text' 
              placeholder='Add a pick-up location'/>
            <input 
                onClick={()=>{
                  setPanelOpen(true)
                }}
               value={destination}
               onChange={(e)=>{
                 setDestination(e.target.value);
               }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3' 
              type='text' 
              placeholder='Enter your destination'/>
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-[0%]'>
               <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-10  bg-white translate-y-full pt-12'>
       
        <VehiclePanel setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 py-8  bg-white translate-y-full pt-12'>
        <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 py-8  bg-white translate-y-full pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}  />
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 px-3 py-8  bg-white  pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
       
    </div>
  )
}

export default Home