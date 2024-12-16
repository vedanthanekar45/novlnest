import React from "react"

export default function Otpverify() {

    const [otp, setOtp] = React.useState("");

    const handleOtp = async (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="bg-[#1d1d1d]">
            <div className="h-screen flex items-center justify-center">
                <div className="login-box h-[430px] text-xl flex-col items-center relative bg-[#1d1d1d] z-0 justify-center">
                    <div className="prata flex justify-center z-2 text-green-700 text-5xl mt-10">
                        <h1>Verify Your Email</h1>
                    </div>
                    <div className="prata text-white flex justify-center z-2 text-2xl mt-6">
                        <h1>A 6 digit one time password is sent to you</h1>
                    </div>
                    <form onSubmit={handleOtp} className="w-80 ml-[90px] mt-12">
                        <input onChange={(e) => setOtp(e.target.value)}
                        autoComplete='off' name="username" type="number"
                        className="block rounded-xl bg-[#1d1d1d] text-white h-16 mb-6 p-4 w-full border-white border"/>

                        <button className="bg-green-700 h-12 rounded-xl mt-2 w-full text-white">Login</button>
                    </form>
                    <div className="prata text-white flex justify-center z-2 text-2xl mt-6">
                        <h1>Not a user yet? Register <a href='/signup' className="text-green-700">here!</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}