import AddCardDefault from "@/components/AddCardDefault";
import ProfileMenu from "@/components/ProfileMenu";
import React from "react";

import { DrawerDemo } from "@/components/CreateDocDrawer";

const page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#FCFCFC]">
      <main className="grid grid-cols-8 w-[100%] h-[100%]">
        {/* Sidebar*/}
        <div className="grid grid-rows-8 col-span-1  border-r-[#F0F0F0] border-r-[2px]">
          <div className="row-span-1 flex flex-col justify-center px-3">
            <p className="text-[#7E15FF]">FLASHMIND</p>
          </div>
          <div className="row-span-7 ">Général</div>
        </div>
        {/* content */}
        <div className="grid grid-rows-8 col-span-5  border-r-[#F0F0F0] border-r-[2px]">
          <div className="row-span-1 flex flex-col justify-center px-3 ">
            <p className="text-[#7E15FF]">
              {" "}
              Salut <strong>Mr.You</strong>
            </p>
          </div>
          <div className="row-span-7 px-3 ">
            <span className="text-[#303030] text-[2rem]">Mes cartes</span>
            <div className="grid grid-cols-4 gap-3 pt-[1rem]">
              <div className="">
                {/* Drawer */}
                <DrawerDemo />
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className="grid grid-rows-8 col-span-2">
          <div className="row-span-1 flex flex-col justify-center px-3 ">
            <ProfileMenu />
          </div>
          <div className="row-span-7 ">
            <p className="text-[1.5rem]">stats</p>
            <div>docs : </div>
            <div>cards : </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
