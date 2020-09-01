import React,{Component} from 'react'
import { Pie } from 'react-chartjs-2'
class Chart extends Component {

    constructor(props){
        super(props)
        console.log('Chart Props',props)
        this.state = {
            data : props.data,
            toggle:props.toggle,
            
        }
        console.log(this.state)
       
    }

   componentDidMount(prevProps){
    console.log(this.state)
            // this.setState({ data : this.props.data })
            // if(prevProps !== this.props){
            //     this.setState({redraw:true})
            // }
            // else{
            //     this.setState({redraw:false})
            // }
            // setTimeout(()=>{
            //     this.setState({ redraw: false})
    
            // },2000)
   }

   
   
  
    
    render(){
       
        return (
            <div>
                <Pie 
                    data={this.props.data}
                    redraw={this.props.toggle}
                />
            </div>
        )


    }
   
}
export default  Chart;