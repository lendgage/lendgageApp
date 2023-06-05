import { Box, Grid, TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

const ProfessionalInfo = () => {
    const [year, setYear] = useState('');
    function yearHandler(e){
        setYear(e.target.value);
    }
    const [month, setMonth] = useState('');
    function monthHandler(e){
        setMonth(e.target.value);
    }
    const [salary, setSalary] = useState('');
    function salaryHandler(e){
        setSalary(e.target.value);
    }

    return (
        <Box sx={{padding:'4rem', width:'80%', height:'60vh'}}>
            <Typography variant="h3" sx={{color:'#004aad', marginBottom:2, fontFamily:'Montserrat, sans-serif', fontWeight:'regular'}}>
                Tell us about yourself
            </Typography>

            <FormControl sx={{marginBottom:2}}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel value="salaried" control={<Radio />} label="SALARIED" />
                    <FormControlLabel value="self-employed" control={<Radio />} label="SELF-EMPLOYED" />
                </RadioGroup>
            </FormControl>

            <Typography variant="h5" sx={{color:'#38b6ff', marginBottom:0, fontFamily:'Montserrat, sans-serif', fontWeight:'bold'}}>
                Total Work experience
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField id='standard-basic' label='Years' variant='standard' handleChange={yearHandler}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id='standard-basic' label='Months' variant='standard' handleChange={monthHandler}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField id='standard-basic' label='Average monthly salary' variant='standard' handleChange={salaryHandler}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProfessionalInfo;