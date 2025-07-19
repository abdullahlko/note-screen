import React, { useState } from "react";
import { Fab, Zoom } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function expand() {
    setExpanded(true);
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="mb-10">
      <form className="relative sm:w-[480px] mt-[30px] mx-auto mb-[20px] bg-white p-[15px] rounded-[7px] shadow-[0_1px_5px_rgb(138,137,137)]">
        {isExpanded && (
          <input
            className="w-full border-none p-1 outline-none text-[1.2em] font-inherit resize-none"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          className="w-full border-none p-1 outline-none text-[1.2em] font-inherit resize-none"
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={submitNote}
            className="relative float-right mr-[10px] text-white border-none w-[50px] h-[50px] cursor-pointer outline-none !bg-[#f5ba13] -translate-y-4 "
          >
            <NoteAddIcon style={{ fontSize: "32px", color: "white" }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
