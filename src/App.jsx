
import { useState } from 'react'
import './App.css'
import { Table } from 'antd';

function App() {
  const [davlatlar, setDavlatlar] = useState(null)

  function getData() {
    try {
      fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,borders,population,area,id')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDavlatlar(data)
        });
    } catch (error) {
      console.log(error);

    }
  }
  useState(() => {
    getData()
  }, [])




  const columns = [
 
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => record.name.common,
    },

    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'Common',
      dataIndex: 'official',
      key: 'official',
    },

  ];
  return (


    <div>
      <h1 >Davlatlar</h1>
      {davlatlar && (
        <Table
          style={{ width: '60%', margin: '20px auto' }}
          dataSource={davlatlar}
          columns={columns}
        />
      )}



    </div>
  )
}

export default App