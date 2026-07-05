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

                        outerRadius={120}

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

                    <Legend/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}