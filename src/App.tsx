import "./tailwind.output.css"

import MarketRow from "./components/market/market.component"

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
