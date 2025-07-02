import React, { useEffect, useState } from "react";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => setQuotes(data.results))
      .catch((err) => {
        console.error("Error fetching quotes:", err);
        setError("Failed to fetch quotes.");
      });
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Quotes</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-4">
          {quotes.map((quote) => (
            <li key={quote._id}>
              <blockquote className="italic">"{quote.content}"</blockquote>
              <p className="text-sm text-gray-600">- {quote.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuoteList;
