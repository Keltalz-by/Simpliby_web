import React from "react";
import ProtectedLayout from "../../components/ProtectedLayout";
import Toggle from "../../components/Toggle";
import Main from "./Main";

const Dashboard = () => {
  return (
    <ProtectedLayout>
      <section className="bg-[#dfeffa] flex flex-col gap-3 min-h-screen font-ERegular p-2 border border-[green]">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Good morning Roban store</h2>
            <p>Ready to make some cool cash today</p>
          </div>
          <section className="flex items-center gap-14 ">
            <div className="flex items-center gap-2 w-fit bg-white rounded-md py-2 px-4 font-semibold text-sm">
              <p>Available</p>
              <Toggle />
              <p>Unavailable</p>
            </div>
            <section className="flex items-center gap-5">
              <div className="w-8 h-8">
                <img
                  src="/bell.svg"
                  alt="notification"
                  className="w-full h-full"
                />
              </div>

              <div className="w-10 h-10 rounded-full border border-black">
                <img src="" alt="profile" className="w-full h-full" />
              </div>
            </section>
          </section>
        </header>
        <Main />
      </section>
    </ProtectedLayout>
  );
};

export default Dashboard;
