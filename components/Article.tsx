import { useState } from 'react';
import { Box, Modal, TextField, Typography, MenuItem, Button } from "@mui/material"


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#F7CAC9',
    boxShadow: 0,
    p: 6,
};

const Article = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>?</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Margin
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Margin is the money borrowed from a broker to purchase an investment and is the difference between the total value of an investment and the loan amount.
                    </Typography>

                    <div>
                        <br></br>
                        <Button variant="contained" target="_blank" href="https://www.privatebank.citibank.com/we-offer/margin-lending">In-Depth Article</Button>
                        
                        <br></br><br></br>
                        <Button variant="outlined">Enable</Button>

                        <Button size="small">Not Now</Button>
                    </div>
                    
                </Box>
            </Modal>
        </div>
    )
}

export default Article
