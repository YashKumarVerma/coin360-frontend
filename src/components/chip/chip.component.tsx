import {Component} from "react"

interface props{
    vendor: string
    price:string
    unit:string
}

class Chip extends Component<props> {
    render(){
    const {vendor, price, unit} = this.props
    return <div className="lg:w-1/6 mx-1">
                <div className="widget p-4 rounded-lg bg-white hover:bg-gray-50 transition-colors border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <div className="text-xs uppercase font-light text-gray-500">
                                {`${price} ${unit.toUpperCase()}`}
                            </div>
                            <div className="text-xl font-bold">
                                {vendor}
                            </div>
                        </div>
                        <img width={24} height={24} alt="vi" src="https://coin360.com/icons/exchanges/32x32/binance.png" />
                    </div>
                </div>
            </div>
    }
}


export default Chip