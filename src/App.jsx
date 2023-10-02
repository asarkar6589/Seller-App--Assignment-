import { useSearchParams } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({ page: 1 });
  }, []);
  return (
    <div className="w-full h-full bg-slate-300 p-2">
      <Home />
    </div>
  );
}

export default App;
