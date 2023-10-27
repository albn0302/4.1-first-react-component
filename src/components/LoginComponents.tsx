import {useState} from 'react'

export default function LoginComponents() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        const res = await fetch('http://10.111.3.78:3001/api/login', {
            method: 'Post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const data = await res.json();
        console.log(data);
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            {email}
            <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            {password}
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
