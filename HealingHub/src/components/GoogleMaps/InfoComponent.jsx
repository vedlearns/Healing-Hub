import { InfoWindow } from "@react-google-maps/api";
import "./InfoComponent.css";

const InfoComponent = ({ selectedPlace, CloseInfoBanner }) => {
  return (
    <InfoWindow
      position={{
        lat: selectedPlace.geometry.location.lat(),
        lng: selectedPlace.geometry.location.lng(),
      }}
      onCloseClick={() => CloseInfoBanner(null)} // Close on "X"
    >
      <div className="cookie-card">
        <h3 className="title text-black text-xl">{selectedPlace.name}</h3>

        <p className="description">
          <strong className="text-black text-lg">Address:</strong>{" "}
          {selectedPlace.vicinity || "No address available"}
        </p>

        <div className="actions">
          <p className="text-black p-3 rounded-3xl">
            <strong className="text-black text-sm">Business Status:</strong>{" "}
            {selectedPlace.business_status}
          </p>

          {selectedPlace.phone ? (
            <p className="bg-blue-600 p-3 rounded-3xl">
              📞{" "}
              <a
                href={`tel:${selectedPlace.phone}`}
                className="text-white no-underline"
              >
                {selectedPlace.phone}
              </a>
            </p>
          ) : (
            <p>No contact available</p>
          )}
        </div>
      </div>
    </InfoWindow>
  );
};

export default InfoComponent;
