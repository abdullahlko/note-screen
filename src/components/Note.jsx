import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleEditToggle() {
    setIsEditing(true);
  }

  function handleSave() {
    props.onEdit(props.id, {
      title: editedTitle,
      content: editedContent,
    });
    setIsEditing(false);
  }

  function handleTitleChange(e) {
    setEditedTitle(e.target.value);
  }

  function handleContentChange(e) {
    setEditedContent(e.target.value);
  }

  function handleDeleteConfirm() {
    props.onDelete(props.id);
    setShowDeleteDialog(false); // Close dialog after deleting
  }

  function handleDeleteClick() {
    setShowDeleteDialog(true); // Show the confirmation modal
  }

  function handleCloseDialog() {
    setShowDeleteDialog(false); // Close dialog without deleting
  }

  function renderViewMode() {
    return (
      <div className>
        <h1 className="text-[1.1em] mb-[6px] font-bold text-center">
          {props.title}
        </h1>
        <p className="text-[1.1em] mb-[10px] whitespace-pre-wrap break-words">
          {props.content}
        </p>
      </div>
    );
  }

  function renderEditMode() {
    return (
      <div className="pl-6">
        <input
          type="text"
          value={editedTitle}
          onChange={handleTitleChange}
          className="w-full border rounded p-1 mb-2"
        />
        <textarea
          value={editedContent}
          onChange={handleContentChange}
          className="w-full border rounded p-1"
          rows={4}
        />
      </div>
    );
  }

  function renderTopButton() {
    if (isEditing) {
      return (
        <button
          onClick={handleSave}
          className="text-[#4caf50] border-none w-[36px] h-[36px] cursor-pointer outline-none"
        >
          <SaveIcon />
        </button>
      );
    } else {
      return (
        <button
          onClick={handleEditToggle}
          className="text-[#f5ba13] border-none w-[36px] h-[36px] cursor-pointer outline-none"
        >
          <EditIcon />
        </button>
      );
    }
  }
  function handleCompletedToggle() {
    setCompleted(!completed);
  }

  return (
    <>
      <div
        className={`relative bg-white rounded-[7px] shadow-[0_2px_5px_#ccc] p-[10px] w-[240px] min-h-[130px] m-[16px] flex flex-col justify-between transition-all duration-300 ${
          completed ? "opacity-50 grayscale" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompletedToggle}
          className="absolute top-2 left-2 w-4 h-4 cursor-pointer accent-green-600"
        />

        {isEditing ? renderEditMode() : renderViewMode()}

        <div className="absolute top-2 right-2 flex gap-2">
          {renderTopButton()}
        </div>

        <div className="flex justify-end mt-2">
          <button
            onClick={handleDeleteClick}
            className="text-[#f44336] border-none w-[36px] h-[36px] cursor-pointer outline-none"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>

      {/* --- MUI Delete Confirmation Dialog --- */}
      <Dialog open={showDeleteDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Note ⚠️</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this note? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Note;
