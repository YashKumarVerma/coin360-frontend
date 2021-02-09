import {Chip} from "../../interface/chip.interface"
import {Component} from "react"

interface props{
    data:Chip
    base:string
}

class ChipComponent extends Component<props> {
    render(){
    const {data}=this.props

    return <div className="lg:w-1/4  mx-1">
                <div className="widget w-44 p-4 rounded-lg bg-white hover:bg-gray-50 transition-colors border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                                {`${data.bestPrice.toFixed(3)} ${this.props.base.toUpperCase()}`}
                            </div>
                            <div className={`text-xl font-bold ${data.bestExchange.length == 0 ? "text-gray-200" : ""}`}>
                                {data.bestExchange.length == 0 ? "loading" : data.bestExchange }
                            </div>
                        </div>
                        <img width={24} height={24} alt="vi" src="https://coin360.com/icons/exchanges/32x32/binance.png" />
                    </div>
                </div>
            </div>
    }
}


export default ChipComponent