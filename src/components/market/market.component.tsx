import { Chip } from "../../interface/chip.interface";
import ChipComponent from "../chip/chip.component";
import { Component } from "react";
import Divider from "../divider/divider.component";
import { Market } from "../../interface/market.interface";

interface props {
  market: Market;
}

class MarketRow extends Component<props> {
  render() {
    const { market } = this.props;

    return (
      <div className="flex flex-row">
        {Object.keys(market.asks).map((chip, index) => {
          return <ChipComponent data={market.asks[chip]} base={market.base} />;
        })}
        <Divider title={market.pair} />
        {Object.keys(market.bids).map((chip, index) => {
          return <ChipComponent data={market.bids[chip]} base={market.base} />;
        })}
      </div>
    );
  }
}

export default MarketRow;
