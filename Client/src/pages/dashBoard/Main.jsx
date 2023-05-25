import React from "react";
import Card from "../../components/Card";

const Main = () => {
  const cardlist = [
    {
      name: "orders",
      icon: "",
      desc: "View incoming requests from interested buyers",
    },
    {
      name: "View products",
      icon: "",
      desc: "View exixting products,Edit or delete item",
    },
    {
      name: "Add new Products",
      icon: "",
      desc: "Update your store by adding new items to your shelf",
    },
    {
      name: "Records",
      icon: "",
      desc: "View transaction details of all products you reserve",
    },
  ];
  return (
    <div className="flex-1 grid grid-cols-5 gap-2 h-full w-full">
      <div className="col-span-4 grid grid-cols-2 gap-2">
        {cardlist.map((item, idx) => (
          <Card props={item} key={idx} />
        ))}
      </div>
      <div className="col-span-1">
        <div className=" bg-white rounded-md w-full h-full">
          <p>withdrawals</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
