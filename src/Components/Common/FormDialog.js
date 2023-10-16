import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function FormDialog({ handleClose, open, title, handleSave }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    deadline: "",
  });

  useEffect(() => {
    setFormData({
      name: "",
      description: "",
      deadline: "",
    });
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="form-dialog">
      <Dialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <DialogContent>
            <TextField
              fullWidth
              label="Name"
              name="name"
              sx={{ paddingBottom: "30px" }}
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              sx={{ paddingBottom: "30px" }}
              value={formData.description}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
            variant="contained"
            sx={{ marginRight: "20px" }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={() => handleSave(formData)}
            variant="contained"
            sx={{ marginRight: "10px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
