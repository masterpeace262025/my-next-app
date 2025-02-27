import { IQuote } from "../type";
// Get Quotes from api
export async function getQuotes(): Promise<IQuote[]> {
  try {
    const res = await fetch("https://dummyjson.com/quotes?limit=30");
    if (!res.ok) {
      throw new Error("Failed to fetch quotes");
    }
    const data = await res.json();
    return data.quotes;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}
