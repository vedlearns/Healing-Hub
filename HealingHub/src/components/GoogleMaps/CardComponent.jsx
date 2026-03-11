const CardComponent = ({ place }) => {
  return (
    <>
      <div className="flex w-full mt-6 p-4 max-w-7xl flex-col rounded-lg bg-white shadow-md border border-slate-200 my-6">
        <div className="flex items-center gap-4 text-slate-800">
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-semibold text-slate-800">
                {place.name}
              </h5>
              <div className="flex items-center gap-2">
                {place.phone && (
                  <a
                    href={`tel:${place.phone}`}
                    className="text-blue-600 text-sm font-medium"
                  >
                    📞 {place.phone}
                  </a>
                )}
              </div>
            </div>
            <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">
              {place.types?.[0] || "Place"}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-base text-slate-600 font-light leading-normal">
            <strong className="text-black text-lg">Address :</strong>{" "}
            {place.vicinity}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p
            className={`text-sm font-semibold ${
              place.opening_hours?.isOpen() ? "text-green-600" : "text-red-600"
            }`}
          >
            {place.opening_hours?.isOpen() ? "Open Now" : "Closed"}
          </p>
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline text-sm"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
