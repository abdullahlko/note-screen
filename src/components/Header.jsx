import React from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

function Header() {
  return (
    <nav className="flex justify-center items-center bg-[#f5ba13] text-white p-4 py-5">
      <div className="logo flex items-center gap-3">
        <TipsAndUpdatesIcon style={{ fontSize: "4rem", color: "white" }} />
        <span className="font-extrabold text-4xl">NoteScreen</span>
      </div>
    </nav>
  );
}

export default Header;
