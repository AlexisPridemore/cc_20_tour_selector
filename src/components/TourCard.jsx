const TourCard = ({ id, name, info, image, price, onRemove }) => {
    return (
      <div className="border rounded shadow p-4 flex flex-col">
        <img src={image} alt={name} className="h-60 w-full object-cover rounded" />
        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <span className="text-green-600 font-semibold">${price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-700">{info}</p>
        <button
          onClick={() => onRemove(id)}
          className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
        >
          Not Interested
        </button>
      </div>
    );
  };
  
  export default TourCard;