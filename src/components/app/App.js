import React, { useState, useEffect } from "react"
import Header from "../header/Header";
import CategoryPage from "../pages/CategoryPage";

function App() {

  const [iconUrl, setIconUrl] = useState('')

  return (
    <div className="App">
      <Header iconUrl={iconUrl} />
      <div className="wrapper">
        <CategoryPage onSetIcon={() => setIconUrl()} />
      </div>
    </div>
  );
}

export default App;
