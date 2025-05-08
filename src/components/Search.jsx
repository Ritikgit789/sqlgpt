import React from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const apikey = import.meta.env.VITE_GEMINI_KEY;

function Search({ text, onTextChange, setAnswer, setLoader }) {
  const searchfunc = async () => {
    const genAI = new GoogleGenerativeAI(apikey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const inputbyUser = text;
    console.log(inputbyUser);
    
    try {
      setLoader(true);
      const prompt = `
You are an AI SQL expert. Convert the following natural language question into an SQL query for an SQLite database.

  Rules:
  - Answer and generate any SQL queries and codes for users that they asked.
  - Always answers any SQL concepts with sample code if any relation were not told by the user.
  - Always use your brain and if no any schema told by user, give only sample code query.
  - If schema or any table name given by user, then give the code query accordingly.
  - Always answers any SQL, RDBMS concepts and questions asked in interviews only, not any other topics please!
  - And also answers like if users asked to give an example or description of the functions like "WHERE BY", "UPDATE","SELECT" or any in SQL query we used, please explain in short with a sample example query.
  - If any irrelevant questions other than SQL or RDBMS asked by users like 1+1 or any other, then always try to answer -- "Sorry, I would like to help you about any queries needed".

Question: ${inputbyUser}
SQL Query (Only return the query, no explanation):
"""`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      console.log('Gemini Response:', text);
      setAnswer(text);
      setLoader(false);
    } catch (error) {
      console.error('Error:', error);
      setLoader(false);
    }
  };

  return (
    <div className="w-2/3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={text}
          onChange={(e) => onTextChange && onTextChange(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ask your SQL question here..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            searchfunc();
          }}
        >
          Ask!
        </button>
      </div>
    </div>
  );
}

export default Search;
