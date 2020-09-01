import React,{ useState,useEffect } from 'react'
import './index.css'
import { useForm } from 'react-hook-form'
import { Pie } from 'react-chartjs-2'
import Chart from '../Chart';
export default function Dashboard() {

    const [income,setIncome] = useState([])
    const [income_head,setHead] = useState([])
    const [incomevalue,setIncomeValue] = useState(null)
    const [headvalue,setHeadValue] = useState(null)
    const [expense,setExpense] = useState(null)
    const [redraw,setRedraw] = useState(false)
    const { errors,register,handleSubmit } = useForm()

    const data = {
        labels: income_head,
        datasets: [{
          data: income,
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
      
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
         
          ]
        }]
      };

      useEffect(()=>{
        if(redraw ==true){
            setRedraw(false)
        }
      },[redraw !=true])

      const handleChange = (e)=> {
          const target = e.target;
          const name = target.name;
          if(name == 'amount'){
              setIncomeValue(target.value)
          }
          if(name == 'income_head'){
              setHeadValue(target.value)
          }
      }
      const submit = ()=> {

         // setIncome(value)
         // console.log(value)
            income.push(incomevalue)
            income_head.push(headvalue)
         // console.log(data.datasets[0].data.push(value))
          console.log(data)
          setRedraw(true)
        

      }

    return (
        <div class="app">
            <div class="form">
                <p>{errors.income_head && "Income Head is Required"} </p>
                <p>{errors.amount && "Amount is Required"} </p>
                <form onSubmit={handleSubmit(submit)}>
                <input name="income_head" type="text" ref={register({required:true})}  onChange={handleChange} replaceholder="Enter Income Head" /> <br />  
                  <input name="amount" type="text" ref={register({required:true})}  onChange={handleChange} replaceholder="Enter amount" /> <br />
                <input type="submit" value="submit" />   <br />
                </form>
            </div>
           
                
                <div class="piechart">
                    <Chart data={data} toggle={redraw} />
                </div>     
                
            
            
            
            
        </div>
    )
}
