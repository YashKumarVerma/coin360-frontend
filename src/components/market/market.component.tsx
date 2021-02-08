import Chip from "../chip/chip.component"
import {Component} from "react"
import Divider from "../divider/divider.component"

class MarketRow extends Component {
    render(){
        return (
            <div className="flex flex-row">
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Divider title="BTC/USDT" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
                <Chip price="103,421" unit="BTC" vendor="Benance" />
            </div>
        )
    }    
} 

export default MarketRow