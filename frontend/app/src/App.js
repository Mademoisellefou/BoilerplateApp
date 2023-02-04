
import { useEffect, useState } from 'react';
import './App.css';
import axiosClient from './config/axios';

function App() {
  const [users, setUsers] = useState([])
  const url = '/user'
  useEffect(() => {
    const fetch = async () => {
      await axiosClient.get(url).then(res => setUsers(res.data)).catch(err => console.log(err))
    }
    fetch()
  },[url]
  )
  return (
  <div>
    {users.map(user=>
      <div key={user.id}>
        <h3>{user.username}</h3>
        <h5>{user.title}</h5>
      </div>
      )}
    </div>
 );
}

export default App;
