import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer,

CartesianGrid

} from "recharts";

export default function MonthlyExpenseChart({data}){

return(

<div className="chart-card">

<h2>Monthly Expense</h2>

<ResponsiveContainer

width="100%"

height={350}

>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="amount"

stroke="#4F46E5"

strokeWidth={3}

/>

</LineChart>

</ResponsiveContainer>

</div>

);

}