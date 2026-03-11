import { Marker } from "@react-google-maps/api";

const MarkerComponent=({places, handleSelectedPlace, userLocation })=>{

return(
  <>
      {/* User's Current Location Marker */}
      <Marker
        position={userLocation}
        icon={{
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", 
          scaledSize: new window.google.maps.Size(40, 40), 
        }}
        title="You are here"
      />

      {/* Nearby Hospitals Markers */}
      {places.map((place, index) => (
        <Marker
          key={index}
          position={{
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          }}
          onClick={() => handleSelectedPlace(place)}
          title={place.name}
        />
      ))}
    </>
)

}

export default MarkerComponent