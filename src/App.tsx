import "./tailwind.output.css"

import Chip from "./components/chip/chip.component"
import MarketRow from "./components/market/market.component"
import Navbar from "./components/navbar/navbar.component"
import React from 'react';

function App() {
  return (
    <>
        {/* <Navbar /> */}
        <div className="p-4 flex-cols">
            <MarketRow />
            <MarketRow />
            <MarketRow />
            <MarketRow />
        </div>
    </>
  );
}

export default App;
