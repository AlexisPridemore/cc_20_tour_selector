import { useEffect, useState } from 'react';
import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState('All');

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.allorigins.win/get?url=https://course-api.com/react-tours-project'
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const dataWrapped = await res.json();
      const data = JSON.parse(dataWrapped.contents);
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  const uniqueDestinations = ['All', ...new Set(tours.map((t) => t.name))];
  const filteredTours = selected === 'All' ? tours : tours.filter((t) => t.name === selected);

  return (
    <main className="p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Tour Explorer</h1>

      <DestinationSelector
        destinations={uniqueDestinations}
        selected={selected}
        onChange={setSelected}
      />

      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
};

export default App;
