import './toplist.scss';


const listData = [
    {
        name: 'Opay',
        percent: '21',
        amount: '$1,800,000'
    },
    {
        name: 'Konga',
        percent: '15',
        amount: '$2,500,000'
    },
    {
        name: 'Jumia',
        percent: '8',
        amount: '$2,500,000'
    },
    {
        name: 'XStore',
        percent: '27',
        amount: '$2,500,000'
    },
]


function TopList () {

    return (
        <div className='List'>
            <div className="head">
                <h2>
                    <div className="One">Top Platforms</div>
                </h2>
                <div className="Two"><button>See All</button></div>
            </div>
            <div className="list">
                {
                    listData.map((data, index) => {
                        return (
                            <section key={index}>
                                <div>
                                    <label htmlFor={data.name}>
                                        <h3>{data.name}</h3>
                                    </label>
                                    <meter
                                        id={data.name}
                                        min='0'
                                        max='30'
                                        low='5'
                                        high='20'
                                        value={data.percent}
                                    >
                                    </meter>
                                    </div>
                                <div className='detail'>
                                    <div>{data.amount}</div>
                                    <div>{data.percent}%</div>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopList;