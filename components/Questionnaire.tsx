import { useState } from 'react';
import { Box, Modal, TextField, Typography, MenuItem, Button, OutlinedInput, InputAdornment, InputLabel, FormControl } from "@mui/material"


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

const financialKnowledge = [
    {
        value: "novice",
        label: "Novice - I am here to learn."
    },
    {
        value: "intermediate",
        label: "Intermediate - I know of the investment instruments I can use, but might need some guidance."
    },
    {
        value: "advanced",
        label: "Advanced - I have a good understanding of the investment instruments I can use and how to use them."
    }
]

const Questionnaire = () => {

    const [open, setOpen] = useState<boolean>(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [income, setIncome] = useState<string>("");
    const [chosenFinancialKnowledge, setChosenFinancialKnowledge] = useState<string>("");


    const handleIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncome(event.target.value);
    }

    const handleChosenFinancialKnowledgeChange = (event: React.ChangeEvent<{ value: string }>) => {
        setChosenFinancialKnowledge(event.target.value as string);
    }

    const handleSubmit = () => {
        console.log(income, chosenFinancialKnowledge);
    }

    return (
        <div>
            <Button onClick={handleOpen} >Open modal</Button>
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

                    <div className="my-4">
                    <FormControl sx={{ mt: 3 }} fullWidth>
                        <InputLabel htmlFor="outlined-adornment-amount">Monthly Income</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-amount"
                            value={income}
                            onChange={handleIncomeChange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Monthly Income"
                        />
                    </FormControl>
                        <TextField
                            sx={{ mt: 3 }}
                            fullWidth
                            select
                            required
                            id="outlined-select-financial-knowledge"
                            label="Level of financial knowledge"
                            defaultValue=""
                            helperText="Please select your level of financial knowledge"
                            onChange={handleChosenFinancialKnowledgeChange}
                        >
                            {financialKnowledge?.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                    <Button sx={{ mt: 3 }} onClick={handleSubmit}>Submit</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Questionnaire
