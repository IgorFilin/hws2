import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    background: '#FFFFFF',
                    border: '1px solid #00CC22',
                    width: '18px',
                    height: '18px',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
