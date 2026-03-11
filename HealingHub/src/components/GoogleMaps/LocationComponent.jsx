import { useEffect } from "react";
const LocationComponent=({userLocation})=>{

useEffect(()=>{
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition((position)=>{
      userLocation({
        lat:position.coords.latitude,
        lng:position.coords.longitude
      })
    },
  (err)=>console.error("Error getting location: ",err)
  )
  }
  else{
    console.log("Geolocation not Supported by browser. ");
  }
},[])

return(<></>)
}

export default LocationComponent;