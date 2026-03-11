import { GoogleMap } from "@react-google-maps/api";

const MapViewComponent=({ CloseInfoBanner,setMap,userLocation ,children })=>{

  const center = {
    lat: userLocation.lat,
    lng: userLocation.lng,
  };

return(
  <div className=" flex p-0 justify-center items-center w-screen h-screen">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ margin:"0", width: "80%", height: "80%",borderRadius:"2em" }}
          options={{
            // zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            // fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
          onClick={() => CloseInfoBanner(null)}
        >
          {children}
        </GoogleMap>
      </div>
)}

export default MapViewComponent