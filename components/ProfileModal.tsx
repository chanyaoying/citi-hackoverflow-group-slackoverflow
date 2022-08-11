import { useState } from 'react';
import { Box, Modal, TextField, Typography, MenuItem, Button, OutlinedInput, InputAdornment, InputLabel, FormControl, Dialog } from "@mui/material"


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

type QuestionnaireProps = {
    open: boolean,
    handleClose: () => void,
}

const ProfileModal = ({ open, handleClose }: QuestionnaireProps) => {


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
  <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Full Name : Jon Snow
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Email : snow@gmail.com
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Industry Preference : Energy
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Portfolio Size : $1.4m
                </Typography>

               
                
            </Box>
               
        </Modal>
    )
}

export default ProfileModal;
