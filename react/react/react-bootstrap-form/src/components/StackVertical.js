import React from "react";
import { Stack } from "react-bootstrap";

const StackVertical = ()=>{
    return(
        <div>
            <Stack direction="horizontal" gap={3}>
                <div className='p-2'>First Item</div>
                <div className='p-2'>Second Item</div>
                <div className='p-2'>Third Item</div>
            </Stack>
        </div>
    )
}

export default StackVertical