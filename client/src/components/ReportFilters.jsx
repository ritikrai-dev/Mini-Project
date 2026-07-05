import "../style/reportFilters.css";

export default function ReportFilters() {

    return (

        <div className="report-filter">

            <div>

                <label>From</label>

                <input type="date" />

            </div>

            <div>

                <label>To</label>

                <input type="date" />

            </div>

            <button className="primary-btn">
    <i className="ti ti-file-analytics"></i>
    Generate Report
</button>

        </div>

    );

}