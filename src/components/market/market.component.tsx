import { CONFIG } from "../../constants/constants";
import ChipComponent from "../chip/chip.component";
import { Component } from "react";
import Divider from "../divider/divider.component";
import { Market } from "../../interface/market.interface";
import axios from "axios";
import { keys } from "@material-ui/core/styles/createBreakpoints";

interface props {
  market: Market;
}

interface state {
  market: any;
  lock: boolean;
}

class MarketRow extends Component<props, state> {
  constructor(props: props) {
    super(props);

    this.state = {
      market: this.props.market,
      lock: false,
    };
  }

  pollingAgent() {
    // const uniqueTimer = Math.floor(Math.random() * 10) * 1000;
    let counter = 0;

    setInterval(async () => {
      if (counter === 2) {
        const { data } = await axios.get(
          `${CONFIG.server}/market/${this.props.market.pair}`
        );
        counter = 0;
        console.log("counter = 0");
        if (Object.keys(data).length !== 0) {
          console.log(`>setting state to`, data);
          this.setState({ market: data });
        }
      } else {
        console.log("incrementing counter = ", counter);
        counter++;
      }
    }, 1000 * 10);
  }

  componentDidMount() {
    this.pollingAgent();
  }

  render() {
    const { market } = this.state;

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
