import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const [error, setError] = useState('');
    const router = useNavigate()

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        const res = await fetch('http://10.111.3.78:3001/api/register', {
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name, email, password, age})
        })
        const data = await res.json();
        console.log(data);
        if (data.msg === 'Users created') {
            router('/login', {replace: true})
        } else {
            setError(data.detail)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' required onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}/>
            <input type="number" placeholder='Age' required onChange={(e)=>setAge(parseInt(e.target.value))}/>
            <button type='submit'>Sign up</button>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </form>
    </div>
  )
}
