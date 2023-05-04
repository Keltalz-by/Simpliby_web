import { useState, useRef, useEffect } from "react";

let currentIndex = 0;

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    console.log(e);
    const currentVal = e.target.value;
    const newOTP = [...otp];
    newOTP[currentIndex] = currentVal.substring(currentVal.length - 1);
    if (!currentVal) {
      setActiveIndex(currentIndex - 1);
    } else {
      setActiveIndex(currentIndex + 1);
    }
    setOtp(newOTP);
  };

  const handleBackSpace = (e, index) => {
    console.log(e.key);
    currentIndex = index;
    if (e.key === "Backspace") setActiveIndex(currentIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeIndex]);

  return (
    <div className="flex items-center gap-3">
      {otp.map((item, index) => {
        return (
          <input
            ref={index === activeIndex ? inputRef : null}
            type="number"
            className="w-12 h-12 outline-none border focus:border-2 focus:border-black border-black rounded-lg text-center spin-button-none"
            key={index}
            onChange={handleChange}
            onKeyDown={(e) => handleBackSpace(e, index)}
            value={otp[index]}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
