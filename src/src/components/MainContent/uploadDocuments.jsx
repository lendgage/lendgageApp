import { Box, Typography, Button, Input } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import * as React from 'react';
import { useState } from 'react';

const UploadDoc = () => {
    const [pan, setPan] = useState();
    const panHandler = (e) => {
        setPan(e.target.file[0]);
    };
    const [bankState, setBankState] = useState();
    const bankStateHandler = (e) => {
        setBankState(e.target.file[0]);
    };
    const [photo, setPhoto] = useState();
    const photoHandler = (e) => {
        setPhoto(e.target.file[0]);
    };
    const handleSubmission = () => {

    };
    return (
        <Box sx={{padding:'4rem', width:'80%', height:'60vh'}}>
            <Typography variant="h3" sx={{color:'#004aad', marginBottom:2, fontFamily:'Montserrat, sans-serif', fontWeight:'regular'}}>
                Upload Documents
            </Typography>
            <Typography variant="body2" sx={{color:'#676767'}}>
                The documents you are uploading should be legible. You can gather the documents and login to begin from the same place.
            </Typography>

            <Typography variant="h5" sx={{color:'#38b6ff', marginTop:5, marginBottom:1, fontFamily:'Montserrat, sans-serif', fontWeight:'bold'}}>
                PAN card
            </Typography>
            <div>
                <Input type="file" name='pan' onChange={panHandler}/>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSubmission}>Upload your PAN card here &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </div>

            <Typography variant="h5" sx={{color:'#38b6ff', marginTop:5, marginBottom:1, fontFamily:'Montserrat, sans-serif', fontWeight:'bold'}}>
                Bank Statements
            </Typography>
            <div>
                <Input type="file" name='bankState' onChange={bankStateHandler}/>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSubmission}>Upload Last 6 months Bank Statement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            </div>

            <Typography variant="h5" sx={{color:'#38b6ff', marginTop:5, marginBottom:1, fontFamily:'Montserrat, sans-serif', fontWeight:'bold'}}>
                Photograph
            </Typography>
            <div>
                <Input type="file" name='photo' onChange={photoHandler}/>
                <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSubmission}>Upload recent passport size Photograph&nbsp;</Button>
            </div>
        </Box>
    )
}

export default UploadDoc;