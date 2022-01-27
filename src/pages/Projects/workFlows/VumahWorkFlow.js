import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  Card,
  CardHeader,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Tooltip,
  Divider,
  Alert
} from '@mui/material';
import {
  Album,
  Assignment,
  Call,
  Close,
  DocumentScanner,
  LaptopMac,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { capitalCase } from 'change-case';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
  LoadingButton
} from '@mui/lab';
import Page from '../../../components/Page';
import { MHidden, MIconButton } from '../../../components/@material-extend';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

const TIMELINES = [
  {
    key: 6,
    typeAssignment: true,
    title: 'Search autocomplete',
    desc: ['All search bars Linked to google auto complete api based on the UK -> Autocomplete API integrated with search box  to provide city suggestions per key stroke'],
    time: '23/11/2021 (10:30 am)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 7,
    typeAssignment: true,
    title: 'Maps API attached',
    desc: [
      'Maps API attached, and must able to show where vehicles are listed after the user uploads the vehicle and the autocomplete api/search box should be able send a message to maps API to show the relevant results based on the location searched up',
      'Distance API should be connected to display nearest vehicles to the listing selected',
      'Users should be able to post comments, and the map below should be connect to Google maps API and show the location of the vehicle which would be provided by the user.'
    ],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 8,
    typeAssignment: true,
    title: 'Favourites and Share Functionality',
    desc: [
      'When adding a vehicle to favourites the listing must be found in the favourites section. And the share button should be functional (https://vumah.herokuapp.com/car-listing )'
    ],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 9,
    typeAssignment: true,
    title: 'Stripe API attached',
    desc: [' Stripe API attached (https://vumah.herokuapp.com/request-booking )'],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 10,
    typeAssignment: true,
    title: 'Chat API attached',
    desc: ['Chat API attached, and should be able to upload images (https://vumah.herokuapp.com/messages )'],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 11,
    typeAssignment: true,
    title: 'Chat API attached',
    desc: ['Chat API attached, able to upload images, functionality of report, request extra time, break down, additional payment and booking request features. Also the ability to provide a review after the booking. (https://vumah.herokuapp.com/chat )'],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 12,
    typeAssignment: true,
    title: 'Authentication API',
    desc: ['Permissions and all function on this page attached to the back end (https://vumah.herokuapp.com/account)'],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 13,
    typeAssignment: true,
    title: 'Graph Functionality',
    desc: [
      'Functionality of the graph, needs to reflect date range and data for the listings below (https://vumah.herokuapp.com/earning) ',
      'summary data reflects the data for the date range selected',
      'should be able to select the amount of days for the date range on the calendar',
      'This should have the follow in the calender',
      'Also, a download option for the earnings data, vehicles listings data, where data will be provided on an excel sheet',
      'This page attached to the back and pauses listings automatically when needed',
      'Ranking page attached to script which has already been set up'
    ],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 14,
    typeAssignment: true,
    title: 'Edit Account Profile',
    desc: ['Ability to change images and edit descriptions (https://vumah.herokuapp.com/public-review )'],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 15,
    typeAssignment: true,
    title: 'Attach the Accounting Page ',
    desc: [
      'Attach the accounting page (individual and business) to the back end, and the company verification API to the company house number verification (business account) ( https://vumah.herokuapp.com/account) ',
      'Finally connecting the website to mail gun to fire emails at different points such as verification emails and login/sign ups.'
    ],
    time: 'waiting for the API end point (pending...)',
    color: 'warning',
    icon: <Assignment />
  },
  {
    key: 16,
    typeAssignment: true,
    title: 'Complete ',
    desc: ['Completion of all Assignments with Perfection'],
    time: 'waiting for the API end point (pending...)',
    color: 'secondary',
    icon: <Assignment />
  }
];

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const LoginStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  height: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTcHJpbmctU2VjdXJpdHktQXBwIiwic3ViIjoiQWxsYW4yMDAyIiwiaWF0IjoxNjM1NjM4ODc1LCJleHAiOjE2MzU2NzQ4NzV9.po28rt6MXfKBfbtoY9snSTkgxVIJuihLNgdMHB4kKSk';

function VumahWorkFlow() {

  useEffect(() => {
    try {
      const accessToken = window.localStorage.getItem('accessVumahToken');
      if (accessToken && accessToken === token) {
        setLoggedIn(true);
        if (!showed) {
          setShowed(true);
          enqueueSnackbar('Authorised', {
            variant: 'success',
            action: (key) => (
              <MIconButton size='small' onClick={() => closeSnackbar(key)}>
                <Close />
              </MIconButton>
            )
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  });

  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showed, setShowed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);


  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        if (values.email === 'vumahltd.files@gmail.com' && values.password === 'vumah123') {
          localStorage.setItem('accessVumahToken', token);
          setLoggedIn(true);
          enqueueSnackbar('Login success', {
            variant: 'success',
            action: (key) => (
              <MIconButton size='small' onClick={() => closeSnackbar(key)}>
                <Close />
              </MIconButton>
            )
          });
          if (isMountedRef.current) {
            setSubmitting(false);
          }
        } else {
          resetForm();
          if (isMountedRef.current) {
            setSubmitting(false);
            setErrors({ afterSubmit: 'Login failed' });
          }
        }
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.message });
      }
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <RootStyle title='Vumah: WorkFlow | Web-Droid'>
        <Container maxWidth='lg'>

          {!loggedIn ?
            <>
              <LoginStyle>
                <MHidden width='mdDown'>
                  <SectionStyle>
                    <Typography variant='h3' sx={{ px: 5, mt: 2, mb: 5 }}>
                      Hi, Welcome Back
                    </Typography>
                    <img src='/static/illustrations/illustration_components.png' alt='login' />
                  </SectionStyle>
                </MHidden>
                <Container maxWidth='sm'>
                  <ContentStyle>
                    <Stack direction='row' alignItems='center' sx={{ mb: 5 }}>
                      <Box sx={{ flexGrow: 1 }} />
                      <Box>
                        <MHidden width='smDown'>
                          <Typography variant='body2' sx={{ mt: { md: -2 } }}>
                            For Authorization email &nbsp;
                            <Link underline='none' variant='subtitle2' component={RouterLink} to={'/register'}>
                              kanyeallan@gmail.com
                            </Link>
                          </Typography>
                        </MHidden>
                      </Box>
                    </Stack>
                    <Stack direction='row' alignItems='center' sx={{ mb: 5 }}>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='h4' gutterBottom>
                          Sign in to Vumah Project
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
                      </Box>

                      <Tooltip title={capitalCase('webdroid-security')}>
                        <Box component='img' src={`/static/auth/ic_jwt.png`} sx={{ width: 32, height: 32 }} />
                      </Tooltip>
                    </Stack>
                    <Box sx={{ minHeight: 180 }}>
                      <FormikProvider value={formik}>
                        <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
                          <Stack spacing={3}>
                            {errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit}</Alert>}
                            <Grid container spacing={4} justifyContent='center'>
                              <Grid item xs={12}>
                                <TextField
                                  fullWidth
                                  autoComplete='username'
                                  type='email'
                                  label='Email address'
                                  {...getFieldProps('email')}
                                  error={Boolean(touched.email && errors.email)}
                                  helperText={touched.email && errors.email}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  fullWidth
                                  autoComplete='current-password'
                                  type={showPassword ? 'text' : 'password'}
                                  label='Password'
                                  {...getFieldProps('password')}
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position='end'>
                                        <IconButton onClick={handleShowPassword} edge='end'>
                                          {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                      </InputAdornment>
                                    )
                                  }}
                                  error={Boolean(touched.password && errors.password)}
                                  helperText={touched.password && errors.password}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <LoadingButton fullWidth size='large' type='submit' variant='contained'
                                               loading={isSubmitting}>
                                  Login
                                </LoadingButton>
                              </Grid>
                            </Grid>
                          </Stack>
                        </Form>
                      </FormikProvider>
                    </Box>
                  </ContentStyle>
                </Container>
              </LoginStyle>
            </>
            :
            <>
              <div>
                <Grid container justifyContent='center' spacing={2} sx={{ mb: 5 }}>
                  <Grid xs={12} container justifyContent='center'>
                    <Typography variant='h3' sx={{ color: 'text.secondary', m: 2 }}>
                      Vumah WorkFlow
                    </Typography>
                  </Grid>
                  <Grid item xs={5} container justifyContent='flex-end' alignItems='center'>
                    <Typography variant='body2' sx={{ color: 'text.secondary', m: 2 }}>
                      K - Allan
                    </Typography>
                    <TimelineDot sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: { xs: '30px', sm: '40px', md: '50px' },
                      height: { xs: '30px', sm: '40px', md: '50px' }
                    }}>
                      <Assignment />
                    </TimelineDot>
                  </Grid>
                  <Grid item xs={2} container justifyContent='center' alignItems='center'>
                    <Box sx={{ width: '100%' }}>
                      <Divider />
                    </Box>
                  </Grid>
                  <Grid item xs={5} container justifyContent='flex-start' alignItems='center'>
                    <TimelineDot sx={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: { xs: '30px', sm: '40px', md: '50px' },
                      height: { xs: '30px', sm: '40px', md: '50px' }
                    }}>
                      <DocumentScanner />
                    </TimelineDot>
                    <Typography variant='body2' sx={{ color: 'text.secondary', m: 2 }}>
                      Vumah Ltd
                    </Typography>
                  </Grid>
                </Grid>
                <MHidden width='smDown'>
                  <Card sx={{ overflow: 'unset', position: 'unset', width: '100%' }}>
                    <Box sx={{ p: 3, minHeight: 180 }}>
                      <Timeline position='alternate'>
                        {TIMELINES.map((item) => (
                          <TimelineItem key={item.key}>
                            <TimelineOppositeContent>
                              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                {item.time}
                              </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                              <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                              <Paper
                                sx={{
                                  p: 3,
                                  bgcolor: 'grey.50012'
                                }}
                              >
                                <Typography variant='subtitle2'>{item.title}</Typography>
                                {item.desc.map((desc, index) =>
                                  <Typography key={index} variant='body2' sx={{ color: 'text.secondary' }}>
                                    {item.typeAssignment &&
                                    <Album color='primary' sx={{ width: '10px', height: '10px', mx: '5px' }} />}
                                    {desc}
                                  </Typography>
                                )}
                              </Paper>
                            </TimelineContent>
                          </TimelineItem>
                        ))}
                      </Timeline>
                    </Box>
                  </Card>
                </MHidden>
                <MHidden width='smUp'>
                  <Card sx={{ overflow: 'unset', position: 'unset', width: '100%' }}>
                    <CardHeader title='Customized' />
                    <Box sx={{ p: 3, minHeight: 180 }}>
                      <Grid container justifyContent='center'>
                        {TIMELINES.map((item) => (
                          <Grid key={item.key} item xs={12} container justifyContent='flex-start'>
                            <Grid item xs={12} container justifyContent='flex-start' alignItems='center'>
                              <TimelineDot color={item.color} sx={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '50px',
                                height: '50px'
                              }}>{item.icon}</TimelineDot>
                              <Typography variant='body2' sx={{ color: 'text.secondary', m: 2 }}>
                                {item.time}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Paper
                                sx={{
                                  p: 3,
                                  bgcolor: 'grey.50012'
                                }}
                              >
                                <Typography variant='subtitle2'>{item.title}</Typography>
                                {item.desc.map((desc, index) =>
                                  <Typography key={index} variant='body2' sx={{ color: 'text.secondary' }}>
                                    {item.typeAssignment &&
                                    <Album color='primary' sx={{ width: '10px', height: '10px', mx: '5px' }} />}
                                    {desc}
                                  </Typography>
                                )}
                              </Paper>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Card>
                </MHidden>
              </div>
            </>
          }
        </Container>
      </RootStyle>
    </>
  );
}

export default VumahWorkFlow;