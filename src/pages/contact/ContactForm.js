import {useState, forwardRef} from 'react';
import emailjs from 'emailjs-com';

// material
import { Button, Typography, TextField, Stack, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
//
import { varFadeInUp, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function ContactForm() {

  const [templateParams, setData] = useState({name: '', email: '', subject: '', message: ''})
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCloseLoading = () => {
    setLoading(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onChane = (e) => {
    const {name, value} = e.target

    setData({
      ...templateParams,
      [name]: value
    })
  }

  const sendMessage = () => {
    setLoading(true)

    emailjs.send('service_hdvc1uw', 'template_ob76rnb', templateParams, 'user_ycPngHlt7KQwiN8LXT2In')
      .then((result) => {
        setOpen(true);
        setData({name: '', email: '', subject: '', message: ''})
        setLoading(false)
      }, (error) => {
          console.log("Errors ---", error.text);
          setLoading(false)
      }).catch((e) => {
        console.log("Errors happened ----> ", e)
        setLoading(false)
      })
  }


  return (
    <Stack spacing={5}>
      <MotionInView variants={varFadeInUp}>
        <Typography variant="h3">
          Feel free to contact us. <br />
          We'll be glad to hear from you, buddy.
        </Typography>
      </MotionInView>

      <Stack spacing={3}>
        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Name" name='name' value={templateParams.name} onChange={onChane}/>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Email" name='email' value={templateParams.email} onChange={onChane}/>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Subject" name='subject' value={templateParams.subject} onChange={onChane}/>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <TextField fullWidth label="Enter your message here." multiline rows={4} name='message' value={templateParams.message} onChange={onChane}/>
        </MotionInView>
      </Stack>

      <MotionInView variants={varFadeInUp}>
        <Button size="large" variant="contained" onClick={sendMessage}>
          Submit Now
        </Button>
      </MotionInView>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Email was sent successly
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={handleCloseLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>
  );
}
