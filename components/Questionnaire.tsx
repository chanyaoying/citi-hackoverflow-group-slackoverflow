import { useState } from 'react';
import { Box, Modal, TextField, Typography, MenuItem, Button } from "@mui/material"


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    boxShadow: 0,
    p: 6,
};

const financialKnowledge = [
    {
        value: "0",
        label: "Novice - I am here to learn."
    },
    {
        value: "1",
        label: "Intermediate - I know of the investment instruments I can use, but might need some guidance."
    },
    {
        value: "2",
        label: "Advanced - I have a good understanding of the investment instruments I can use and how to use them."
    }
]



const Questionnaire = () => {

    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [income, setIncome] = useState<string>("");

    const handleIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncome(event.target.value);
    }

    const handleSubmit = () => {
        console.log(income);
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Hello, CUSTOMER.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Tell us more about yourself so we can better serve you.
                    </Typography>

                    <div className="my-4 grid gap-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ mt: 3 }}
                                fullWidth
                                required
                                id="outlined-required"
                                label="Monthly Income"
                                defaultValue=""
                                value={income}
                                onChange={handleIncomeChange}
                            />
                            <TextField
                                sx={{ mt: 3 }}
                                fullWidth
                                select
                                required
                                id="outlined-select-financial-knowledge"
                                label="Level of financial knowledge"
                                defaultValue=""
                                helperText="Please select your level of financial knowledge"
                            >
                                {financialKnowledge.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </form>


                        {income}
                    </div>

                </Box>
            </Modal>
        </div>
    )
}

export default Questionnaire
