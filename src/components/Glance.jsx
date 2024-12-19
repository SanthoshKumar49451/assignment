import React from 'react'

const Glance = () => {
   
        const stats = [
          { title: "Consultations", value: "24", trend: "15% increase", type: "increase" },
          { title: "Orders Placed", value: "12", trend: "15% decrease", type: "decrease" },
          { title: "Conversion", value: "50%", trend: "15% decrease", type: "decrease" },
          { title: "Total Sales Value", value: "$2,400", trend: "15% increase", type: "increase" },
          { title: "Avg Order Value", value: "$240", trend: "15% increase", type: "increase" },
          { title: "Commission Paid", value: "$240", trend: "15% increase", type: "increase" },
        ];
  return (
    <div className='border border-gray-100 rounded p-2  m-5    '>
        <h2 className='font-semibold tetx-2xl text-left p-2'>
            At Glance
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  '>
            {
                stats.map((item,index)=>(
                   
                        <div key={index} className='p-2 border border-gray-100  hover:scale-90 rounded'>
                            <p className='font-semibold text-xl'>{item.title}</p>
                            <p className='mt-2 font-semibold text-2xl'>{item.value}</p>
                            {item.type==='increase'?<p className='mt-2 text-xl'>+{item.trend}</p>:<p className='mt-2 text-xl'>-{item.trend}</p>}

                        </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Glance;