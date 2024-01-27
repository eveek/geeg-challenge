import './tablebox.scss';

const tableData = [
    {
        picture: 'user1.png',
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '$80,000',
        status: 'Paid',
        invoice: 'file.svg'
    },
    {
        picture: 'user2.png',
        name: 'Cooper Press',
        date: 'Nov 15, 2023',
        amount: '$150,000',
        status: 'Refund',
        invoice: 'file.svg'
    },
    {
        picture: 'user1.png',
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '$80,000',
        status: 'Paid',
        invoice: 'file.svg'
    },
    {
        picture: 'user2.png',
        name: 'Cooper Press',
        date: 'Nov 15, 2023',
        amount: '$150,000',
        status: 'Refund',
        invoice: 'file.svg'
    },
    {
        picture: 'user1.png',
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '$80,000',
        status: 'Paid',
        invoice: 'file.svg'
    },
    {
        picture: 'user2.png',
        name: 'Cooper Press',
        date: 'Nov 15, 2023',
        amount: '$150,000',
        status: 'Refund',
        invoice: 'file.svg'
    },
    {
        picture: 'user1.png',
        name: 'Marcus Bergson',
        date: 'Nov 15, 2023',
        amount: '$80,000',
        status: 'Paid',
        invoice: 'file.svg'
    },
    {
        picture: 'user2.png',
        name: 'Cooper Press',
        date: 'Nov 15, 2023',
        amount: '$150,000',
        status: 'Refund',
        invoice: 'file.svg'
    },

]

function Tablebox () {
    return (
        <section className="tableCont">
            <div className="head">
                <div className="One">Last Order</div>
                <div className="Two"><button>See All</button></div>
            </div>
            <div className='tablebox'>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Invoice</th>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => {
                            return (
                                <tr key={index} className='tr'>
                                    <td><div className='person'><img src={data.picture} alt="" />{data.name}</div></td>
                                    <td className='date'>{data.date}</td>
                                    <td>{data.amount}</td>
                                    <td className={data.status == 'Paid'? 'paid': 'refund'}>{data.status}</td>
                                    <td><div className='invoice'><img src={data.invoice} alt="" />View</div></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </section>
    )
}

export default Tablebox