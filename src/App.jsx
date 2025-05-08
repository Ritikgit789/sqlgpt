import { useState, useEffect } from "react";
import { Loader } from "./components";
import { Navbar } from "./components";
import { About } from "./components";
import { Search } from "./components"; // Uncomment this if you have Search.jsx
import ReactMarkdown from "react-markdown";
import { ThemeProvider } from "./context/theme"; 

function App() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState(``);
  const [isLoading, setLoader] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    <main className="min-h-screen bg-gradient-to-b from-[#e0f7fa] via-[#f1f8ff] to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">

      <div className="main">
        {/* <div className="gradient" />
      </div>
      <div className="bg-white dark:bg-gray-900"> */}
        <Navbar />
        <div className="flex flex-col items-center p-10">
          <h1 className="text-5xl font-extrabold text-pink-800 text-center mb-2">
            SqlGPT
          </h1>
          <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 text-center mb-4">
            Your Database Companion
          </h2>
          <p className="text-lg italic text-center text-gray-700 dark:text-white mb-6 max-w-2xl">
            Struggling with SQL queries? Let SqlGPT handle the logic—just describe your question and get instant SQL, hassle-free.
          </p>

          <Search
            text={text}
            onTextChange={(text) => setText(text)}
            setAnswer={setAnswer}
            setLoader={setLoader}
          />

          <Loader isLoading={isLoading} />

          <div className="flex flex-col bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-6 mt-10 items-start w-full max-w-4xl max-h-[400px] overflow-auto shadow-lg">
            <div className="text-lg whitespace-pre-wrap break-words w-full">
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  </ThemeProvider>

  );
}

export default App;
