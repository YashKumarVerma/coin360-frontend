import { CONFIG } from "../../constants/constants";
import { Component } from "react";
import { Market } from "../../interface/market.interface";
import MarketRow from "../market/market.component";
import axios from "axios";

/** declaring props */
interface props {}

/** declaring state structure */
interface state {
  markets: Array<Market>;
  lock: boolean;
  startIndex: number;
  endIndex: number;
}

/**
 * DataPane to load and populate data
 */
class DataPane extends Component<props, state> {
  /** initialize component state */
  constructor(props: props) {
    super(props);
    this.state = {
      markets: [],
      lock: false,
      startIndex: 0,
      endIndex: 20,
    };
  }

  /** function to run initial data */
  async componentDidMount() {
    const { data } = await axios.get(`${CONFIG.server}/hydrate`);
    this.setState({ markets: data });

    window.addEventListener("scroll", async () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!this.state.lock) {
          //   lock loading mechanism
          this.setState({ lock: true });

          //   load more details
          const { endIndex } = this.state;
          const { data } = await axios.get(
            `${CONFIG.server}/hydrate/${endIndex + 1}/${endIndex + 20}`
          );
          this.setState({
            markets: [...this.state.markets, ...data],
            endIndex: endIndex + 20,
            lock: false,
          });
        }
      }
    });
  }

  /** to remove listener from scroll */
  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      console.log("unmounted");
    });
  }

  /** finally render items */
  render() {
    const { markets } = this.state;
    return (
      <div>
        <div className="p-4 flex-cols">
          {markets.map((market: Market) => (
            <MarketRow market={market} key={market.pair} />
          ))}
        </div>
      </div>
    );
  }
}

export default DataPane;
