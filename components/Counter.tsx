import { useAppSelector, useAppDispatch } from '../src/store/storeHooks'
import { decrement, increment } from '../src/store/counterSlice'
import Button from '@mui/material/Button';

export function Counter() {

    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <Button onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <span>{count}</span>
                <Button onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}