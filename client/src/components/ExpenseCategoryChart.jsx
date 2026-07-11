import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const COLORS = [
    "#4F46E5",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#06B6D4",
    "#8B5CF6"
];

export default function ExpenseCategoryChart({ data }) {


    if(data.length===0){
    return(

<div className="chart-card">

<h2>Expense Categories</h2>

<p>No expense data available yet.</p>

</div>

    );
}

    return (

        <div className="chart-card">

            <h2>Expense Categories</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                       outerRadius="75%"

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index%COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                    <Legend
    verticalAlign="bottom"
    height={40}
/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}