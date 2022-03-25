import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Container, FormControl, Grid, IconButton, Modal, Stack, TextField, Typography } from '@mui/material'
import { AddCircle } from '@mui/icons-material';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Profile = () => {

    const principalStyle = { background: 'rgba(0, 0, 0, 0.8)', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.8) 100%, to bottom)`, boxShadow: 20, left: '50%', top: '50%', position: 'absolute', p: 7, width: 460,
        transform: 'translate(-50%, -50%)'  
    };

    const [profiles, setProfiles] = useState<any>(() => {
        const savedProfiles = localStorage.getItem("profiles");
        if (savedProfiles) {
            return JSON.parse(savedProfiles);
        } else {
            return [];
        }
    });

    const [profile, setProfile] = useState<string>("");
    const [profilePhoto, setProfilePhoto] = useState<string>("");
    const [currentProfile, setCurrentProfile] = useState<any>({});
    const [openEdit, setOpenEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const [manageProfile, setManageProfile] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEditClose = () => setOpenEdit(false);

    useEffect(() => {
        localStorage.setItem("profiles", JSON.stringify(profiles));
    }, [profiles]);

    function inputPhoto(e: any) {
        setProfilePhoto(e.target.value);
    }

    function inputChangePhoto(e: any) {
        setCurrentProfile({ ...currentProfile, pic: e.target.value });
    }

    function inputName(e: any) {
        setProfile(e.target.value);
    }

    function inputChangeName(e: any) {
        setCurrentProfile({ ...currentProfile, text: e.target.value });
    }

    function handleFormSubmit(e: any) {
        e.preventDefault();
        if (profile !== "" || profilePhoto !== "") {
            setProfiles([
                ...profiles,
                {
                    id: profiles.length + 1,
                    text: profile.trim(),
                    pic: profilePhoto.trim()
                }
            ]);
        }
        setProfile("");
        setProfilePhoto("");
    }

    function deleteProfile(id: number) {
        const removeItem = profiles.filter((profile: { id: number; }) => {
            return profile.id !== id;
        });
        setProfiles(removeItem);
    }

    function updateProfile(id: number, updatedProfile: {}) {

        const updatedItem = profiles.map((profile: { id: number; }) => {
            return profile.id === id ? updatedProfile : profile;
        });
        setProfiles(updatedItem);
    }

    function editProfile(e: any) {
        e.preventDefault();
        updateProfile(currentProfile.id, currentProfile);
        setOpenEdit(false);
    }

    function editOnClick(profile: React.SetStateAction<{}>) {
        setOpenEdit(true);
        setCurrentProfile({ ...profile });
    }

    return (
        <Box>
            <Header />
            <Box>
                <Container sx={{ py: 6, mt: 12 }} maxWidth="lg">
                    <Grid xs={12} item>
                        <Typography sx={{ textAlign: { xs: 'center', } }} component="h2" variant="h2">
                            Who's watching ?
                        </Typography>
                    </Grid>

                    <Grid sx={{ mt: 2, py: 6 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row" container
                        justifyContent="center" alignItems="center" rowSpacing={1} >
                        <Grid item xs={3} justifyContent="center" container>
                            <Stack>
                                <Link to="../moviesList">
                                    <img style={{ border: '4px solid #1a1818', maxHeight: '180px' }} src='../img/avatar1.png' alt='Avatar' />
                                    <Typography sx={{ color: '#7a7676', mt: 2, textAlign: { xs: 'center' } }} component="h2" variant="h5">
                                        Max
                                    </Typography>
                                </Link>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} justifyContent="center" container>
                            <Stack>
                                <Link to="../moviesList">
                                    <img style={{ border: '4px solid #1a1818', maxHeight: '180px' }} src='../img/avatar2.png' alt='Avatar' />
                                    <Typography sx={{ color: '#7a7676', mt: 2, textAlign: { xs: 'center' } }} component="h2" variant="h5">
                                        Guest 1
                                    </Typography>
                                </Link>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} justifyContent="center" container>
                            <Stack>
                                <Link to="../moviesList">
                                    <img style={{ border: '4px solid #1a1818', maxHeight: '180px' }} src='../img/avatar3.jpg' alt='Avatar' />
                                    <Typography sx={{ color: '#7a7676', mt: 2, textAlign: { xs: 'center' } }} component="h2" variant="h5">
                                        Guest 2
                                    </Typography>
                                </Link>
                            </Stack>
                        </Grid>

                        {profiles.map((profile: any, index: React.Key | undefined | null) => (
                            <Grid item xs={3} justifyContent="center" container key={index}>
                                <Stack>
                                    <Link to="../moviesList">
                                        <img style={{ border: '3px solid #1a1818', maxWidth: '180px', maxHeight: '180px', }} src={profile.pic} alt={profile.pic} />
                                        <Typography sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#827272', }} component="h2" variant="h5">
                                            {profile.text}
                                        </Typography>
                                    </Link>
                                </Stack>

                            </Grid>
                        ))}
                        <Grid container justifyContent="center" item xs={3}>
                            <Stack>
                                <Box style={{ height: '150px', textAlign: 'center', paddingTop: '35%' }}>
                                    <IconButton onClick={handleOpen} sx={{ color: '#827272' }}>
                                        <AddCircle style={{ fontSize: 100 }} />
                                    </IconButton>
                                </Box>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{ mt: 2, textAlign: { xs: 'center' }, color: '#827272', }}
                                >
                                    New profile
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Button variant="outlined" sx={{ border: '2px solid #827272',  borderRadius: '3px', color: '#827272' }} onClick={() => setManageProfile(!manageProfile)}>
                            Manage Profiles
                        </Button>
                    </Grid>
                </Container>
            </Box>

            <Modal aria-describedby="modal-modal-description" aria-labelledby="modal-modal-title" onClose={handleClose} open={open} >
                <Box sx={principalStyle}>
                    <form onSubmit={handleFormSubmit}>
                        <Typography id="modal-modal-title" component="h2" variant="h5">
                            Create a new account
                        </Typography>

                        <FormControl fullWidth sx={{ mb: 2 }} >
                            <TextField id='profile' name='profile' value={profile} label="Profile name" className='container_login'
                               InputLabelProps = {{ style: { color: '#665a5a' } }}
                               sx = {{ input: { color: 'white' }, backgroundColor: '#292828' }}
                               type='text' placeholder="Enter your name here ..." onChange={inputName} variant="filled" />
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 2 }} >
                            <TextField id='profilePhoto' name='profilePhoto' value={profilePhoto} label="Profile photo (url)" className='container_login'
                                InputLabelProps = {{ style: { color: '#665a5a' } }} 
                                sx = {{ input: { color: 'white' }, backgroundColor: '#292828' }} 
                                type="text" placeholder="Enter an url photo here ..." onChange={inputPhoto} variant="filled" />
                        </FormControl>

                        <Button fullWidth variant="contained" size="large" type="submit"> Create new account </Button>
                    </form>
                </Box>
            </Modal>

            <Footer />
        </Box>
    )
}

export default Profile
