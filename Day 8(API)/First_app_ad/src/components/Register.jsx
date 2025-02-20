import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';  // Import axios

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();  // to prevent from default execution
        if (!name || !email || !address) {
            alert('All fields are mandatory');
        } else {
            try {
                const uniqueNo = Date.now();
                const userObject = { id: uniqueNo + '', name, email, address };
                const response = await axios.post('http://localhost:3000/users', userObject);  // Await the response
                if (response.status === 201) {
                    alert('User Created successfully');
                }
                navigate('/users'); // Redirect to users component
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div>
            <h3 className="text-center p-2 text-bg-secondary">Registration Page</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Ankush" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Ankush@example.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Address Here" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">Register Me</button>
            </form>
        </div>
    );
}

export default Register;
