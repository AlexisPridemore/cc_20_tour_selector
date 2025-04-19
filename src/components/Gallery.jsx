import TourCard from './TourCard';

const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (tours.length === 0) {
    return (
      <div className="text-center">
        <p className="mb-4">No tours left. Refresh to reload.</p>
        <button onClick={onRefresh} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Refresh
        </button>
      </div>
    );
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;