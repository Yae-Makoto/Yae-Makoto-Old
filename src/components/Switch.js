// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useContext, useState } from 'react';
import { Theme } from '../services/Context/Theme';
import { NotImplemented } from '../services/Helper/Other';

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)
    (
        ({ theme }) => {
            const { themes, theme: current } = useContext(Theme);
            return {
                width: 53,
                height: 26,
                padding: 0,
                margin: 0,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 4,
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                        transform: 'translateX(27px)',
                        color: '#fff',
                        '& + .MuiSwitch-track': {
                            backgroundColor: themes[current].color,
                            opacity: 1,
                            border: 0,
                        },
                        '&.Mui-disabled + .MuiSwitch-track': {
                            opacity: 0.5,
                        },
                    },
                    '&.Mui-focusVisible .MuiSwitch-thumb': {
                        color: '#33cf4d',
                        border: '6px solid #fff',
                    },
                    '&.Mui-disabled .MuiSwitch-thumb': {
                        color:
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[600],
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                    },
                },
                '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    boxShadow: 'none',
                    width: 18,
                    height: 18,
                },
                '& .MuiSwitch-track': {
                    borderRadius: 26 / 2,
                    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                    opacity: 1,
                    transition: theme.transitions.create(['background-color'], {
                        duration: 300,
                    }),
                },
            }
        }
    );

export default function (props) {

    const on = props.on ?? NotImplemented;
    const off = props.off ?? NotImplemented;

    const [checked, setChecked] = useState(props.default === false ? false : true);

    const onClick = () => {
        if (checked) {
            off();
            setChecked(false);
        } else {
            on();
            setChecked(true);
        }

    }

    return (
        <IOSSwitch checked={checked} onChange={onClick} />
    );
}
// checked={checked} onChange={onClick}
