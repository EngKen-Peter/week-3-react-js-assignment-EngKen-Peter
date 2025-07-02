import React, { useEffect, useState } from 'react';

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quotes
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch('https://api.quotable.io/quotes?limit=20');
        if (!res.ok) throw new Error('Failed to fetch quotes');
        const data = await res.json();
        setQuotes(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  // Filter search
  const filtered = quotes.filter(q =>
    q.content.toLowerCase().includes(search.toLowerCase()) ||
    q.author.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center">Loading quotes…</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search quotes"
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filtered.map(q => (
        <div key={q._id} className="border p-4 mb-2 rounded shadow-sm">
          <p className="italic">"{q.content}"</p>
          <p className="text-right">— {q.author}</p>
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
