import "./tailwind.output.css"

import Chip from "./components/chip/chip.component"
import Navbar from "./components/navbar/navbar.component"
import React from 'react';

function App() {
  return (
    <>
        <Navbar />
        <div className="p-4">
            <Chip price="103,421" unit="BTC" vendor="Benance" />
        </div>
    </>
  );
}

export default App;
