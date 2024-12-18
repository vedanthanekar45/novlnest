import React from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import LoadingDots from "../animations/LoadingDots";

const sendOtp = async (email: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/send-otp/', {email}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.messsage);
    } catch (error) {
        console.error(error.response?.data?.error || 'Error sending OTP');
    }
}

function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e): Promise<void> => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                fullName,
                email,
                username,
                password,
            });

            // const loginResponse = await axios.post("http://127.0.0.1:8000/api/login/", {
            //     username: username,
            //     password: password
            // }, {
            //     withCredentials: true,
            // });

            // if (loginResponse.status == 200) {
            //     navigate('/');
            // }
            
            const token = response.data.token;
            localStorage.setItem('authtoken', token)
            if (response.status === 201 || response.status === 200) {
                console.log('Registration successful:', response.data);
                console.log("Token saved: ", token);
                alert('Registration successful! Sending to One Time Password to your email and redirecting to verification...');
                await sendOtp(email)
                navigate('/otp', { state: { isFromRegistration: true, email } }); // Redirect to homepage
              }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsLoading(false)
        }
    };

    // Password Show or Hide
    const [showPassword, setShowPassword] = React.useState(false); // State to toggle visibility
    const handleCheckboxChange = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div className="bg-[#1d1d1d]">
            <div className="h-screen flex items-center justify-center">
                <div className="register-box text-xl flex-col items-center relative z-0 justify-center">
                    <div className="prata flex justify-center z-2 text-green-700 text-5xl mt-10">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="w-80 ml-[90px] mt-12">

                        <input onChange={(e) => setFullName(e.target.value)}
                        autoComplete='off' name="text" type="text" placeholder="Full Name"
                        className="block rounded-xl prata bg-[#1d1d1d] h-16 mb-6 p-4 w-full border-white text-white border"/>

                        <input onChange={(e) => setEmail(e.target.value)}
                        autoComplete='off' name="email" type="text" placeholder="Email"
                        className="block rounded-xl prata bg-[#1d1d1d] h-16 mb-6 p-4 w-full border-white text-white border"/>

                        <input onChange={(e) => setUsername(e.target.value)}
                        autoComplete='off' name="username" type="text" placeholder="Set Username"
                        className="block rounded-xl prata bg-[#1d1d1d] h-16 mb-6 p-4 w-full border-white text-white border"/>

                        <input onChange={(e) => setPassword(e.target.value)}
                        autoComplete='off' name="password" type={showPassword ? 'text' : 'password'} placeholder="Set Password"
                        className="block rounded-xl prata bg-[#1d1d1d] h-16 mb-6 p-4 w-full border-white text-white border"/>
                        <label className="flex">
                            <input type="checkbox" className="bg-white w-5 h-5 mb-4" checked={showPassword} onChange={handleCheckboxChange}/>
                            <p className="prata text-white ml-2">Show Password</p>
                        </label>

                        <button 
                        className="bg-green-700 h-12 rounded-xl w-full text-white" 
                        disabled={isLoading}>
                            {isLoading ? <LoadingDots />: "Register"}
                        </button>
                    </form>
                    <div className="prata text-white flex justify-center z-2 text-2xl mt-6">
                        <h1>Already a user? Login <a href='/signin' className="text-green-700">here!</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;