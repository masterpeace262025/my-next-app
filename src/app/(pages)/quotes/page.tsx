import { getQuotes } from "../../api/getQuotes";
import AuthorBtn from "../../components/AuthorBtn";
import { IQuote } from "../../type";

const Quotes = async () => {
  const quotes: IQuote[] = await getQuotes();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-2xl font-bold mb-4">Inspirational Quotes</div>
      <div className="space-y-4">
        {quotes.length > 0 ? (
          quotes.map((quote) => (
            <div key={quote.id} className="border p-4 rounded shadow">
              <div className="text-lg italic">{quote.quote}</div>
              <AuthorBtn author={quote.author} />
            </div>
          ))
        ) : (
          <div>No quotes available.</div>
        )}
      </div>
    </div>
  );
};

export default Quotes;

export function generateMetadata() {
  return {
    title: "Quotes page",
    description: "Quotes page",
  };
}