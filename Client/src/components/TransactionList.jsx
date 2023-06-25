import React from "react";
// import { IoCaretDownCircleOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
const TransactionList = () => {
  const List = [
    {
      id: 1,
      bank: "/bank.png",
      name: "Chioma jesus",
      date: "30th, May 2022",
      amount: "-100,000",
      status: "failed",
    },
    {
      id: 2,
      bank: "/bank.png",
      name: "Chioma jesus",
      date: "30th, November 2021",
      amount: "-100,000",
      status: "sucess",
    },
    {
      id: 3,
      bank: "/bank.png",
      name: "Joshua marcus",
      date: "10th, January 2021",
      amount: "-100,000",
      status: "pending",
    },
    {
      id: 4,
      bank: "/bank.png",
      name: "Nneka chioma",
      date: "31th, December 2021",
      amount: "-100,000",
      status: "sucess",
    },
    {
      id: 5,
      bank: "/bank.png",
      name: "Chioma jesus",
      date: "30th, May 2021",
      amount: "-100,000",
      status: "sucess",
    },
  ];
  return (
    <div className="col-span-3 bg-white rounded-lg  w-full h-full overflow-y-hidden no-scrollbar">
      <header className="flex items-center justify-between w-full h-[20%] border-b border-[#D9D9D9] px-4 pt-4 pb-2">
        <div className="flex items-center  gap-2">
          <div className="flex items-center justify-center w-7 h-7 p-[5px] bg-[#D9D9D94D] rounded-full">
            <img src="/transact.png" alt="recent" className="object-cover" />
          </div>
          <h2 className="font-Esemi text-lg">Recent transactions</h2>
        </div>
        <div className="flex items-center justify-center w-7 h-7 p-2 border border-[#C2C2C3] rounded-full">
          <img src="/options.png" alt="options" className="object-cover" />
        </div>
      </header>
      <main className="w-full h-[70%] border-b border-[#D9D9D9]  overflow-y-scroll no-scrollbar p-2 px-4">
        {List.map((item) => (
          <TransactList props={item} key={item.id} />
        ))}
      </main>
    </div>
  );
};

const TransactList = ({ props }) => {
  const { bank, name, date, amount, status } = props;
  return (
    <div className="flex justify-between border rounded-lg text-xs mb-2 p-2">
      <div className="flex item-center gap-2">
        <img src={bank} alt="bank" className="w-7 h-7" />
        <div>
          <h2 className="font-Esemi">{name}</h2>
          <p className="text-[#302F2F]">{date}</p>
        </div>
      </div>
      <div className="flex items-start w-32 justify-between">
        <div className="flex flex-col items-start">
          <p className="font-Esemi">{amount}</p>
          <p>
            {status == "failed" ? (
              <Status icon="/declined.png" detail="Failed" />
            ) : status == "sucess" ? (
              <Status icon="/approved.png" detail="Completed" />
            ) : (
              <Status icon="/pending.png" detail="Pending" />
            )}
          </p>
        </div>
        <div className="flex items-center justify-center w-7 h-7 border border-[#C2C2C3] rounded-full">
          <MdArrowDropDown className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

const Status = ({ icon, detail }) => {
  return (
    <div className="flex item-center justify-center gap-1">
      <div className="flex items-center">
        <img src={icon} alt="payment-status-icon" className=" object-contain" />
      </div>
      <p className="text-[#302F2F]">{detail}</p>
    </div>
  );
};
export default TransactionList;
