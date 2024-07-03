import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

function KYCForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    age: '',
    date_of_birth: '',
    address: '',
    nationality: '',
    id_type: '',
    pan_number: '',
    gender: '',
  });

  const [kycStatus, setKYCStatus] = useState(false);
  const [idNumberFieldName, setIdNumberFieldName] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchKYCStatus();
  }, []);

  const fetchKYCStatus = async () => {
    try {
      const response = await axios.get('/api/kyc-status');
      setKYCStatus(response.data.kyc_status);
    } catch (error) {
      console.error('Error fetching KYC status:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/submit-kyc', formData);
      console.log('Form submitted:', response.data);
      setKYCStatus(true);
      handleClose();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.error('Error submitting KYC form:', error.response.data.error);
        setKYCStatus(false);
      } else {
        console.error('Error submitting KYC form:', error);
        setKYCStatus(false);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIdTypeChange = (e) => {
    const { name, value } = e.target;
    const idNumberFieldName = getIdNumberFieldName(value);
    const resetFormData = { ...formData, [name]: value }; // Set selected ID type
    setFormData(resetFormData);
    setIdNumberFieldName(idNumberFieldName);
  };

  const getIdNumberFieldName = (idType) => {
    switch (idType) {
      case 'aadhar':
        return 'aadhaar_mask_no';
      case 'dl':
        return 'dl_number';
      case 'ration':
        return 'ration_card_number';
      default:
        return null; // Return null for other ID types
    }
  };

  const handleGenderSelect = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };
  
  return (
    <Container maxWidth="sm">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open KYC Form
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>KYC Form</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill in the required information.</DialogContentText>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  autoComplete="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="date_of_birth"
                  label="Date of Birth"
                  type="date"
                  name="date_of_birth"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nationality"
                  label="Nationality"
                  name="nationality"
                  autoComplete="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl required>
                  <InputLabel id="id_type-label">ID Type</InputLabel>
                  <Select
                    labelId="id_type-label"
                    id="id_type"
                    name="id_type"
                    value={formData.id_type}
                    onChange={handleIdTypeChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="aadhar">Aadhaar</MenuItem>
                    <MenuItem value="dl">Driving License</MenuItem>
                    <MenuItem value="ration">Ration Card</MenuItem>
                  </Select>
                  <FormHelperText>Select ID Type</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pan_number"
                  label="PAN Number"
                  name="pan_number"
                  autoComplete="pan_number"
                  value={formData.pan_number}
                  onChange={handleChange}
                />
              </Grid>
              {idNumberFieldName && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={idNumberFieldName}
                    label={idNumberFieldName === 'aadhaar_mask_no' ? 'Aadhaar Number' : idNumberFieldName}
                    name={idNumberFieldName}
                    value={formData[idNumberFieldName]}
                    onChange={handleChange}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <FormControl required>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleGenderSelect}
                  >
                    <MenuItem value="">
                      <em>None</em></MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  <FormHelperText>Select Gender</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default KYCForm;