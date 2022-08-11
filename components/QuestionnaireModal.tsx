/**
 * This pops up and asks the user about their preferences.
 * OnSubmit: send the user's preferences to the backend, and update state.
 * TODO: change to Srinivas's questions.
 */

import { useState } from 'react';
import { Box, Modal, TextField, Typography, MenuItem, Button, OutlinedInput, InputAdornment, InputLabel, FormControl } from "@mui/material"
import Question from './Question';

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

const questions = [
    {
        question: 'As I withdraw from my investments, I plan to spend it over a period of',
        name: 'spendingPeriod',
        helperText: 'Select one',
        type: 'select',
        options: ['< 3 years', '3-5 years', '6-10 years', '11-15 years', '> 15 years']
    },
    {
        question: 'What is your definition of a long term investment',
        name: 'longTerm',
        helperText: '',
        type: 'input',
        options: [],
    },
    {
        question: 'I begin taking money from my investments in',
        name: 'periodOfFirstWithdrawal',
        helperText: 'Select one',
        type: 'select',
        options: ['< 3 years', '3-5 years', '6-10 years', '11-15 years', '> 15 years']
    },
    {
        question: 'My current income sources are very unstable/ ect',
        name: 'stable',
        helperText: '',
        type: 'select',
        options: ['True', 'False']
    },
    {
        question: 'If you were holding on to a stock and it plummeted 30% in 2 months, you would',
        name: 'customerReaction',
        helperText: '',
        type: 'select',
        options: ["Sell it", "Hold on", "Buy it again"]
    },
    {
        question: 'Which industry are you interested in investing into',
        name: 'indestryPref',
        helperText: 'Indicate your preference',
        type: 'select',
        options: ['Energy', 'Materials', 'Industrials', 'Utilities', 'Healthcare', 'Financials', 'ConsumerDiscretionary', 'ConsumerStaples', 'InformationTechnology', 'CommunicationServices', 'RealEstate']
    }
]

type QuestionnaireProps = {
    open: boolean,
    handleClose: () => void,
}

const QuestionnaireModal = ({ open, handleClose }: QuestionnaireProps) => {

    // const [income, setIncome] = useState<string>("");
    // const [chosenFinancialKnowledge, setChosenFinancialKnowledge] = useState<string>("");

    // const handleIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setIncome(event.target.value);
    // }

    // const handleChosenFinancialKnowledgeChange = (event: React.ChangeEvent<{ value: string }>) => {
    //     setChosenFinancialKnowledge(event.target.value as string);
    // }

    const [answers, setAnswers] = useState<{ [key: string]: string }>({});

    const handleAnswerChange = (event: React.ChangeEvent<{ value: string }>, name: string ) => {
        setAnswers({ ...answers, [ name ]: event.target.value });
    }

    const handleSubmit = () => {
        // TODO: send the user's preferences to the backend, and update state.
        handleClose();
        console.log(answers);
    }

    return (
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
                    {questions.map(question => (
                        <Question key={question.question} question={question.question} questionType={question.type} helperText={question.helperText} options={question.options} handler={(e) => {handleAnswerChange(e, question.name)}} />
                    ))}
                    {/* <FormControl sx={{ mt: 3 }} fullWidth>
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
                    </TextField> */}

                </div>
                <Button sx={{ mt: 3 }} onClick={handleSubmit}>Save</Button>
            </Box>
        </Modal>
    )
}

export default QuestionnaireModal;
