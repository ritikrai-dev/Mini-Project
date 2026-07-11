import { useEffect, useState } from "react";
import AIInsightCard from "../components/AIInsightCard";

export default function AIInsights() {

    const [insights, setInsights] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchInsights();

    }, []);

    const fetchInsights = async () => {

        try {

            const response = await fetch(

                `${import.meta.env.VITE_API_URL}/api/ai/insights`,

                {

                    headers: {

                        Authorization: `Bearer ${localStorage.getItem("token")}`

                    }

                }

            );

            const data = await response.json();

            setInsights(data.insights);

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    };

    if (loading) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
        fontSize: "22px",
        fontWeight: "600",
      }}
    >
      🤖 Generating AI Insights...
    </div>
  );
}

if (!insights) {
    return (
        <div className="chart-card">
            <h2>No AI insights available.</h2>
            <p>Try refreshing after adding some transactions.</p>
        </div>
    );
}

    return(

        <>

            <div className="page-header">

                <h1>🤖 AI Financial Insights</h1>

                <button

                    className="primary-btn"

                    onClick={fetchInsights}

                >

                    Refresh

                </button>

            </div>

            <AIInsightCard insights={insights}/>

        </>

    );

}