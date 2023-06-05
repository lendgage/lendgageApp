import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

const PanNAadhar = () => {
    const [name, setName] = useState('');
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const [panNum, setPanNum] = useState('');
    const panNumHandler = (e) => {
        setPanNum(e.target.value);
    }
    const [aadhar, setAadhar] = useState('');
    const aadharHandler = (e) => {
        setAadhar(e.target.value);
    }

    return (
        <Box sx={{ padding:'4rem', width:'80%', height:'60vh'}}>
            <Typography variant="h3" sx={{color:'#004aad', marginBottom:6, fontFamily:'Montserrat, sans-serif', fontWeight:'regular'}}>
                Let's validate your PAN & AADHAR card
            </Typography>
            <Typography variant="h5" sx={{color:'#38b6ff', marginBottom:1, fontWeight:'bold', fontFamily:'Montserrat, sans-serif'}}>
                Please enter name as per PAN & AADHAR card
            </Typography>
            <TextField
                required
                id="standard-required"
                fullWidth
                label='Required'
                variant="standard"
                handleChange={nameHandler}
            />
            <Typography variant="h5" sx={{color:'#38b6ff', marginTop:6, marginBottom:1, fontWeight:'bold', fontFamily:'Montserrat, sans-serif'}}>
                PAN number
            </Typography>
            <TextField
                required
                id="standard-required"
                fullWidth
                label='Required'
                variant="standard"
                handleChange={panNumHandler}
            />
            <Typography variant="h5" sx={{color:'#38b6ff', marginTop:6, marginBottom:1, fontWeight:'bold', fontFamily:'Montserrat, sans-serif'}}>
                AADHAR number
            </Typography>
            <TextField
                required
                id="standard-required"
                fullWidth
                label='Required'
                variant="standard"
                handleChange={aadharHandler}
            />
        </Box>
    );
};

export default PanNAadhar;