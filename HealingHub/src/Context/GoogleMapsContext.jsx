import { createContext,useContext ,useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GoogleMapsContext=createContext({})
const libraries=['places']

export const GoogleMapsProvider=({children})=>{

const {isLoaded,loadError}=useJsApiLoader({
  googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
  libraries,
});

const [map, setMap] = useState(null);
const placesServiceRef = useState(null);

  return(
    <GoogleMapsContext.Provider value={{isLoaded,loadError,map, setMap, placesServiceRef}} >
      {children}
    </GoogleMapsContext.Provider>
  )
}
export const useGoogleMaps = () => useContext(GoogleMapsContext);