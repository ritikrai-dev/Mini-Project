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

    if (!data || data.length === 0) {
        return (
            <div className="chart-card">
                <h2>Monthly Expense</h2>
                <p>No monthly expense data available yet.</p>
            </div>
        );
    }

return(

<div className="chart-card">

<h2>Monthly Expense</h2>

<ResponsiveContainer

width="100%"

height={350}

>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis
    dataKey="month"
    tick={{ fontSize: 12 }}
/>

<YAxis
    tick={{ fontSize: 12 }}
/>

<Tooltip
    contentStyle={{
        borderRadius:"10px"
    }}
/>

<Line
    type="monotone"
    dataKey="amount"
    stroke="#4F46E5"
    strokeWidth={3}
    dot={{ r:4 }}
    activeDot={{ r:7 }}
/>

</LineChart>

</ResponsiveContainer>

</div>

);

}