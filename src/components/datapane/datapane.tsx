import {Component} from "react"
import { Market } from "../../interface/market.interface"
import MarketRow from "../market/market.component"
import axios from "axios"

interface props{}
interface state{
    markets:Array<Market>
}

class DataPane extends Component<props,state> {
    constructor(props:props){
        super(props)
        this.state = {
            markets:[]
        }
    }

    async componentDidMount(){
        const {data}= await axios.get("http://localhost:3000/hydrate")
        this.setState({markets:data})
    }

    render(){
        const {markets} = this.state
        return (
        <div>
            <div className="p-4 flex-cols">
                {
                    markets.map((market:Market)=><MarketRow market={market} key={market.pair} />)
                }
            </div>
        </div>
        )
    }
}

export default DataPane