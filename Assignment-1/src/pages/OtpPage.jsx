import { useRef, useState } from "react";

const OtpPage = () => {
    const OTP_LENGTH = 4;
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
    const inputRefs = useRef([]);
    const [verifyStatus, setVerifyStatus] = useState("blank");

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, ''); // Allow only numeric input
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus the next input box
            if (index < OTP_LENGTH - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (otp[index]) {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp === "1234") {
            setVerifyStatus("success");
        } else {
            setVerifyStatus("fail");
        }
    };

    const getInputClass = () => {
        if (verifyStatus === "success") return "border-[#23cf9b]";
        if (verifyStatus === "fail") return "border-[#eb2d5b]";
        return "border-gray-300";
    };

    return (
        <div className="w-full min-h-screen bg-[#3f72af] flex justify-center">
            <div className=" md:w-1/3 mx-auto my-5 p-5 flex flex-col items-center">
                <h1 className="text-4xl text-white font-bold ">Chai aur Code</h1>
                <div className="bg-white p-5 flex flex-col items-center gap-5 mt-10 rounded-md">
                    <h1 className="text-2xl font-bold text-center">Mobile Phone Verification</h1>
                    <p className="text-gray-400 text-center">Enter the 4-digit verification code that was sent to your phone number.</p>
                    <div className="flex justify-center space-x-2">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onKeyDown={e => handleKeyDown(e, index)}
                                ref={el => inputRefs.current[index] = el}
                                className={`w-12 h-12 text-center text-xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass()}`}
                            />
                        ))}
                    </div>
                    <button className={`bg-[#112d4e] text-white px-14 py-1 rounded-md mt-2 ${verifyStatus === "blank" ? "" : verifyStatus === "success" ? "bg-[#23cf9b]" : "bg-[#eb2d5b]"}`} onClick={handleVerify}>
                        {verifyStatus === "blank" ? "Verify Account" : verifyStatus === "success" ? "Verified" : "Verification Failed"}
                    </button>
                    <p className="text-gray-400 text-center">Didn’t receive code? <span className="text-[#112d4e] font-semibold cursor-pointer">Resend</span></p>
                </div>
            </div>
        </div>
    );
}

export default OtpPage;
