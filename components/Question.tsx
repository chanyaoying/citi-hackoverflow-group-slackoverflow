import React from 'react'
import { TextField, MenuItem } from '@mui/material'


type QuestionProps = {
    question: string,
    questionType: string,
    helperText: string,
    options: string[],
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const Question = ({ question, questionType, helperText, options, handler }: QuestionProps) => {
    return (
        <div>
            {
                (questionType === 'select') ? <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    select
                    required
                    id="outlined-select"
                    label={question}
                    defaultValue=""
                    helperText={helperText}
                    onChange={handler}
                >
                    {options?.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                : <TextField
                sx={{ mt: 3 }}
                fullWidth
                required
                id="outlined-helperText"
                label={question}
                helperText={helperText}
              />
            }
        </div>
    )
}

export default Question
