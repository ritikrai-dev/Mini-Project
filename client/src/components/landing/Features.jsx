import "./Features.css";

const features = [

{
icon:"ti ti-layout-dashboard",
title:"Smart Dashboard",
description:"Get a complete overview of your financial health with real-time balance, income, expenses, and recent transactions in one beautifully designed dashboard."
},

{
icon:"ti ti-receipt",
title:"Transaction Management",
description:"Easily add, edit, delete, and organize every transaction with categories, payment methods, and detailed records to keep your finances accurate."
},

{
icon:"ti ti-chart-bar",
title:"Interactive Analytics",
description:"Visualize your spending habits through dynamic pie charts and monthly expense trends, helping you make smarter financial decisions."
},

{
icon:"ti ti-sparkles",
title:"AI Financial Insights",
description:"Leverage AI-powered recommendations that analyze your spending patterns and provide personalized suggestions to improve your financial habits."
},

{
icon:"ti ti-file-export",
title:"Professional Reports",
description:"Generate and download professional reports in PDF, Excel, CSV, and JSON formats for personal tracking, budgeting, or business purposes."
},

{
icon:"ti ti-shield-lock",
title:"Secure Authentication",
description:"Your financial data is protected with JWT authentication, secure APIs, and encrypted communication to ensure complete privacy and security."
}

];


export default function Features(){

return(

<section className="features" id="features">

<div className="section-title">

<h2>Everything You Need to Manage Your Finances</h2>

<p>
ExpenseX gives you all the tools required
to track, analyze and improve your financial life.
</p>

</div>

<div className="feature-grid">

{

features.map((feature)=>(

<div
className="feature-card"
key={feature.title}
>

<div className="feature-icon">

<i className={feature.icon}></i>

</div>

<h3>{feature.title}</h3>

<p>{feature.description}</p>

</div>

))

}

</div>

</section>

);

}