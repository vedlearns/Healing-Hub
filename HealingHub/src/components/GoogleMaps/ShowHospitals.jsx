import CardComponent from "./CardComponent";

const ShowHospitals = ({ places }) => {
  const dummyDataSet = [
    {
      name: "Apollo Hospital Lucknow",
      phone: "+91 9876543210",
      types: ["hospital"],
      vicinity: "Sector 15, Gomti Nagar, Lucknow, Uttar Pradesh",
      opening_hours: { isOpen: () => true },
      place_id: "apollo_lucknow_001",
    },
    {
      name: "Medanta Hospital Lucknow",
      phone: "+91 9123456780",
      types: ["hospital"],
      vicinity: "Shaheed Path, Lucknow, Uttar Pradesh",
      opening_hours: { isOpen: () => true },
      place_id: "medanta_lucknow_002",
    },
    {
      name: "Sahara Hospital",
      phone: "+91 9988776655",
      types: ["hospital"],
      vicinity: "Viraj Khand, Gomti Nagar, Lucknow, Uttar Pradesh",
      opening_hours: { isOpen: () => false },
      place_id: "sahara_lucknow_003",
    },
    {
      name: "Charak Hospital",
      phone: "+91 9871209871",
      types: ["hospital"],
      vicinity: "Dubagga, Hardoi Road, Lucknow",
      opening_hours: { isOpen: () => true },
      place_id: "charak_lucknow_004",
    },
  ];

  return (
    <>
      <div id="list">
        <h2 className="text-4xl font-serif font-bold text-white p-6 rounded-lg shadow-xl shadow-black/20 text-left">
          List of Hospitals within 5km
        </h2>
        <div className="w-full flex justify-center">
          {/* IDEAL CODE  */}
          {/* {places.length > 0 ? (
      <div className="w-full mt-6 p-5 space-y-6 flex flex-col items-center">
        {places.map((place, index) => (
            <CardComponent key={index} place={place} />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500 mt-4">No places found</p>
    )} */}

          {/* DUMMY DATA */}

          <div className="w-full mt-6 p-5 space-y-6 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-blue-50 border border-blue-200 text-blue-800 px-6 py-4 mb-10 rounded-lg shadow-sm text-center">
              <p className="text-sm md:text-base  font-medium">
                Currently displaying{" "}
                <span className="font-semibold">dummy data</span> because the
                Google Maps API is not active yet.
              </p>
            </div>

            {dummyDataSet.map((place, index) => (
              <CardComponent  key={index} place={place} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowHospitals;
