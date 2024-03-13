import styled from "@emotion/styled";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const ConditionalRendering = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button onClick={handleClickOpen}>Open Modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styled}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Modal description
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ConditionalRendering;
