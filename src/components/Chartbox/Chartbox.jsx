import './chartbox.scss';

const chartData = [
    {
        name: "Total Order",
        qty: 350,
        percentage: "23.5%",
        condition: "surplus",
        icon: "box-tick.png",
        chart: "chart1.svg"
    },
    {
        name: "Total Refund",
        qty: 270,
        percentage: "23.5%",
        condition: "deficit",
        icon: "3d-rotate.png",
        chart: "chart2.svg"
    },
    {
        name: "Average Sales",
        qty: 350,
        percentage: "23.5%",
        condition: "deficit",
        icon: "coin.png",
        chart: "chart2.svg"
    },
    {
        name: "Total Income",
        qty: 350,
        percentage: "23.5%",
        condition: "surplus",
        icon: "box-tick.png",
        chart: "chart1.svg"
    }
]

function Chartbox () {


    return (
        <>
            {chartData.map((data, index) => {
                return (
                    <section className='box' key={index}>
                        <div className='head'>
                            <div><img src={data.icon} alt="box-tick" /></div>
                            <div><img src={data.chart} alt="chart" /></div>
                        </div>
                        <div className='middle'>
                            <span>{data.name}</span>
                            <span>{data.qty}</span>
                        </div>
                        <div className='bottom'>
                            <span className={data.condition}>
                                <img src={data.condition == 'surplus'? 'surplus.svg': 'deficit.svg'} alt="" /> 23.5%
                            </span>
                            <span>vs. previous month</span>
                        </div>
                    </section>

                )
            })}

        
        </>
    )
}

export default Chartbox