import { Component } from "react"

interface props{
    title:string
}

class Divider extends Component<props> {
    render(){
        return <div className="h-20 w-28 p-4 border-4 bg-gray-50">{this.props.title}</div>    
    }
}

export default Divider

