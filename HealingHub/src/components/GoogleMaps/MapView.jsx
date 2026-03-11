import { useEffect, useState } from "react";
import { useGoogleMaps } from "../../Context/GoogleMapsContext";
import InfoComponent from "./InfoComponent";
import ShowHospitals from "./ShowHospitals";
import MapViewComponent from "./MapViewComponent";
import MarkerComponent from "./MarkerComponent";

const MapView = ({ userLocation }) => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Custom Hook
  const { isLoaded, loadError, map, setMap, placesServiceRef } =
    useGoogleMaps();

  useEffect(() => {
    if (!map || placesServiceRef.current) return; //so that it doesn't unnecessary execute

    //initializes a Google Places Service  to use methods nearbySearch() , getDetails()
    placesServiceRef.current = new window.google.maps.places.PlacesService(map);
    const request = {
      location: new google.maps.LatLng(userLocation.lat, userLocation.lng),
      radius: 5000,
      type: "hospital",
    };

    // Getting Nearby Hospitals
    placesServiceRef.current.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results); //Normal array of hospitals without phone no

        results.forEach((place) => {
          const detailsRequest = { placeId: place.place_id }; //Setting id for request

          placesServiceRef.current.getDetails(
            // For getting phone numbers
            detailsRequest,
            (details, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                place.phone =
                  details.formatted_phone_number || "No contact available";
                setPlaces([...results]);
              }
            }
          );
        });
      }
    });
  }, [map]);

  if (loadError) {
    return (
      <p className="text-red-500">
        ⚠️ Error loading Google Maps. Please try again later.
      </p>
    );
  }

  if (!isLoaded) {
    return <p>Loading Map...</p>;
  }
  return (
    <>
      <div className="bg-gradient-to-r from-[#976496] to-[#0060fa]">
        <h1 className="text-4xl font-serif  font-bold  text-white p-6 rounded-lg shadow-lg text-center">
          🏥 Hospitals Near You
        </h1>
        <MapViewComponent
          CloseInfoBanner={setSelectedPlace}
          setMap={setMap}
          userLocation={userLocation}
        >
          <MarkerComponent places={places}  handleSelectedPlace={setSelectedPlace}  userLocation={userLocation} />
          {selectedPlace && (
            <InfoComponent
              selectedPlace={selectedPlace}
              CloseInfoBanner={setSelectedPlace}
            />
          )}
        </MapViewComponent>
        <ShowHospitals places={places} />
        <div className="fixed bottom-6 right-6">
  <a
    href="#navbar"
    className="bg-blue-950 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-900"
  >
    Top
  </a>
</div>

      </div>
    </>
  );
};

export default MapView;
