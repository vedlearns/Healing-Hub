import React, { useState } from "react";
import MapView from "./components/GoogleMaps/MapView";
import { GoogleMapsProvider } from "./Context/GoogleMapsContext";
import LocationComponent from "./components/GoogleMaps/LocationComponent";
// import FirebaseAuth from "./components/Auth/FirebaseAuth";
// import { UserAuth } from "./Context/firebaseContext";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  return (
    <>
      <Navbar />
      {/* <FirebaseAuth /> */}
    
        <GoogleMapsProvider>
          <LocationComponent userLocation={setUserLocation} />
          {userLocation && <MapView userLocation={userLocation} />}
        </GoogleMapsProvider>
       </>
  );
};

export default App;
