import React from 'react'
import { XAxis, ComposedChart, Tooltip, Legend, Bar, Line, YAxis, CartesianGrid, BarChart } from 'recharts'

const Insights = () => {
    const data = [
        { month: 'Jan', sales: 4200, revenue: 3800, amt: 2400 },
        { month: 'Feb', sales: 3800, revenue: 3400, amt: 2210 },
        { month: 'Mar', sales: 4500, revenue: 4200, amt: 2290 },
        { month: 'Apr', sales: 4800, revenue: 4600, amt: 2000 },
        { month: 'May', sales: 5200, revenue: 4900, amt: 2181 },
        { month: 'Jun', sales: 5800, revenue: 5500, amt: 2500 },
        { month: 'Jul', sales: 6200, revenue: 5900, amt: 2100 },
        { month: 'Aug', sales: 6000, revenue: 5700, amt: 2300 },
        { month: 'Sep', sales: 5500, revenue: 5200, amt: 2400 },
        { month: 'Oct', sales: 4900, revenue: 4600, amt: 2200 },
        { month: 'Nov', sales: 5300, revenue: 5000, amt: 2300 },
        { month: 'Dec', sales: 6500, revenue: 6200, amt: 2700 }
    ];
    const sideData = [
        {
            metric: "Estimated increase in daily capacity by end of Q4",
            value: "+15%"
        },
        {
            metric: "Estimated increase in conversion by end of Q4",
            value: "+20%"
        }
    ]
    return (
        <div className='flex flex-col lg:flex-row gap-5  w-full justify-between items-center p-4  '>
            <div className='border p-2 rounded '>
                <ComposedChart width={400} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Bar dataKey="amt" barSize={20} fill="#fcce03" />
                    <Line type="monotone" dataKey="sales" stroke="#0a0a01" />
                    <Line type="monotone" dataKey="revenue" stroke="#0a0a01" strokeDasharray="5 5" />
                </ComposedChart>


            </div>
            <div className='border p-2 rounded'>
                <BarChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='p-3 rounded border bg-[#2adba3]  flex flex-col gap-5  justify-between  '>
                <h4>Forecasts</h4>

            {sideData.map((item, index) => (
  <div key={index}>
    <p className='text-3xl text-white'>
        {item.value}
    </p>
    <p className='text-sm text-white'>{item.metric}</p>

    
  </div>
))}
            </div>
        </div>
    )
}

export default Insights