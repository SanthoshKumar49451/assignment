import React, { useState } from 'react'

const Tables = () => {
  const initialData=[
    {
      name: "Emma Davis",
      date: "24 Apr 2024",
      time: "10:24 AM",
      timeSpent: "2h 5m",
      orderValue: "170.21",
      commission: "55"
    },
    {
      name: "James Wilson",
      date: "24 Apr 2024",
      time: "11:15 AM",
      timeSpent: "1h 45m",
      orderValue: "225.50",
      commission: "68"
    },
    {
      name: "Sarah Thompson",
      date: "24 Apr 2024",
      time: "2:30 PM",
      timeSpent: "1h 55m",
      orderValue: "195.75",
      commission: "59"
    },
    {
      name: "Michael Brown",
      date: "24 Apr 2024",
      time: "4:10 PM",
      timeSpent: "2h 15m",
      orderValue: "310.99",
      commission: "93"
    },
    {
      name: "Sophie Clark",
      date: "23 Apr 2024",
      time: "9:45 AM",
      timeSpent: "1h 30m",
      orderValue: "145.80",
      commission: "44"
    },
    {
      name: "Oliver Martinez",
      date: "23 Apr 2024",
      time: "11:30 AM",
      timeSpent: "2h 25m",
      orderValue: "285.30",
      commission: "86"
    },
    {
      name: "Isabella Wong",
      date: "23 Apr 2024",
      time: "2:15 PM",
      timeSpent: "1h 50m",
      orderValue: "198.45",
      commission: "60"
    },
    {
      name: "Liam Anderson",
      date: "23 Apr 2024",
      time: "3:45 PM",
      timeSpent: "2h 10m",
      orderValue: "255.75",
      commission: "77"
    },
    {
      name: "Ava Patel",
      date: "22 Apr 2024",
      time: "10:00 AM",
      timeSpent: "1h 40m",
      orderValue: "175.25",
      commission: "53"
    },
    {
      name: "Ethan Rodriguez",
      date: "22 Apr 2024",
      time: "1:20 PM",
      timeSpent: "2h 30m",
      orderValue: "295.50",
      commission: "89"
    },
    {
      name: "Charlotte Kim",
      date: "22 Apr 2024",
      time: "3:30 PM",
      timeSpent: "1h 35m",
      orderValue: "165.90",
      commission: "50"
    },
    {
      name: "Noah Taylor",
      date: "22 Apr 2024",
      time: "5:00 PM",
      timeSpent: "2h 20m",
      orderValue: "278.60",
      commission: "84"
    },
    {
      name: "Mia Johnson",
      date: "21 Apr 2024",
      time: "9:30 AM",
      timeSpent: "2h 15m",
      orderValue: "245.30",
      commission: "74"
    },
    {
      name: "Lucas Garcia",
      date: "21 Apr 2024",
      time: "11:45 AM",
      timeSpent: "1h 55m",
      orderValue: "188.75",
      commission: "57"
    },
    {
      name: "Sophia Lee",
      date: "21 Apr 2024",
      time: "2:40 PM",
      timeSpent: "2h 5m",
      orderValue: "220.40",
      commission: "66"}
      
     
      
  ]
    const [tableData,setTableData]=useState(initialData)

    const [search,setSearch]=useState('') 

    const handleSearch = (e) => {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
      
      if (searchTerm.trim() === '') {
        setTableData(initialData);
      } else {
        const filteredData = initialData.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTableData(filteredData);
      }
    };












  return (
    <div className=' p-2  mt-4   m-auto border'>
     <div className='flex gap-2 justify-between  items-center'>
     <input type="text" className='w-[150px]  p-2 border-black   m-auto ' value={search} onChange={handleSearch}  placeholder='search by name'/>
     
     </div>

      <table className=' flex justify-center items-center w-full h-auto mt-4 '>
        <thead className='border p-2 border-black rounded'>
          <tr className='border p-3  border-black '>
            <th className='border p-3  border-black '>Name</th>
            <th className='border p-3  border-black '>Date</th>
            <th className='border p-3  border-black '>Order_Value</th>
            <th className='border p-3  border-black '>Commision</th>
          </tr>
          {
            tableData.map((item,index)=>(
              <tr key={index}className='border p-3  border-black '>
                <td className='border p-3  border-black ' >{item.name}</td>
                <td className='border p-3  border-black ' >{item.date}</td>
                <td className='border p-3  border-black ' >{item.orderValue}</td>
                <td className='border p-3  border-black '>{item.commission}</td>
              </tr>

            ))
          }
        </thead>
      </table>
    </div>
  )
}

export default Tables