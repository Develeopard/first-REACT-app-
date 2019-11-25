import React, {useState} from 'react';
import Box from './Box';


function App(){

const [users, setUsers] = useState([
  {name: 'Mike', country: 'USA'},
  {name: 'Dirk', country: 'Germany'},
  {name: 'Peja', country: 'Serbia'}
])

  return(
    <div className='app'>
      {users.map(user =>(
        <Box name={user.name} country={user.country}/>
      ))}
    </div>
  );
}

export default App;