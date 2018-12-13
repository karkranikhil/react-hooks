import React, {useState, useEffect} from 'react';
const initialLocationState={
    latitude:null,
    longitude:null,
    speed:null
}
const App=()=>{
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x:null, y:null})
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState)
   let mounted = true 
  //The function passed to useEffect will run after the render is committed to the screen.
  useEffect(()=>{
    document.title=`You have clicked ${count} times`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    window.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)
    return ()=>{
        window.removeEventListener('mousemove', handleMouseMove) 
        window.removeEventListener('online', handleOnline) 
        window.removeEventListener('offline', handleOffline) 
        navigator.geolocation.clearWatch(watchId)
        mounted=false
    }
  },[count])

  const handleGeolocation = event=>{
    if(mounted){
        setLocation({
            latitude:event.coords.latitude,
            longitude:event.coords.longitude,
            speed:event.coords.speed
        })
    }
      
  }
  const handleOnline=()=>{
    setStatus(true)
  }
  const handleOffline=()=>{
    setStatus(false)
    }

  const handleMouseMove = event =>{
      setMousePosition({
          x:event.pageX,
          y:event.pageY
      })
  }
  const incrementCount=()=>{
    setCount(count+1)
    // with prevState syntax
    // setCount(prevCount=>prevCount+1)
  }
  const toggleLight =()=>{
    setIsOn(prevIsOn=>!prevIsOn)
  }
    return (
    <>
        <h2>Counteer</h2>
        <button onClick={incrementCount}>I was clicked {count} time</button>
        <div style={{height:"50px", width:"50px", 
      background:isOn?"yellow":"grey"}}
      onClick={toggleLight}></div>
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}

      <h2>Network Status</h2>
      <p>You are {status? 'online':'offline'}</p>

      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>longitude is {longitude}</p>
      <p>You speed is {speed?speed:'0'}</p>
    </> 
    )
    
    
};
export default App