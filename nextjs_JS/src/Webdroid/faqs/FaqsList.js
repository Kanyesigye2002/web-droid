import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// utils
import mockData from '../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------

const MOCK_FAQS = [...Array(8)].map((_, index) => ({
  id: mockData.id(index),
  value: `panel${index + 1}`,
  heading: `Questions ${index + 1}`,
  detail: mockData.text.description(index)
}));


const FAQS = [
  {
    id: 1,
    value: 'panel1',
    heading: 'How much does a new website cost?',
    detail: 'There’s not one single answer to this question. A website design is quoted based on the needs of each individual project. Every website is unique and requires different components; we design and develop custom websites specifically for your small and big business. We’ll ask a lot of questions, assess your needs, and give you a quote based on that assessment. Most of our sites run in the $200 – $2,000 range, but can be more or less depending on needs.'
  },
  {
    id: 2,
    value: 'panel2',
    heading: 'How long will it take to get a new website?',
    detail: 'On average, we shoot for a six to eight week turnaround, but the pace of any project is set by each client. How much input you can provide during the initial stages, your availability with feedback, how soon the content is ready – all this affects the speed of completion. The functionality needs may also play a role – more complex sites will take more time to develop.'
  },
  {
    id: 3,
    value: 'panel3',
    heading: 'Will you maintain my site for me?',
    detail: 'We can! We provide on-going support for many of our clients. Check out our Support Packages'
  },
  {
    id: 4,
    value: 'panel4',
    heading: 'Will my website be mobile-friendly?',
    detail: 'Absolutely! Having a mobile-friendly website is more important than ever! We work hard to ensure your website looks great on a variety of devices.'
  },
  {
    id: 5,
    value: 'panel5',
    heading: 'When do I pay?',
    detail: 'For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible.'
  },
  {
    id: 6,
    value: 'panel6',
    heading: 'How much input do I have in the process?',
    detail: 'A lot! Your input and feedback is crucial to this process. We’ll start with a lot of questions about your needs, your likes, your wants and work with you to develop just the right look and functionality.'
  },
  {
    id: 7,
    value: 'panel7',
    heading: 'Who writes the content for the site?',
    detail: 'Usually that is you. You are the expert on your business, so it’s usually best if it comes from you. If you need help, we can recommend copywriters who can help clean up or write original content for you at an additional cost.'
  },
  {
    id: 8,
    value: 'panel8',
    heading: 'Where should my website be hosted?',
    detail: 'Hosting is super important! When it comes to hosting, you get what you pay for. We recommend only amazon web services for consistance and there perfect price with that you pay for what you use.'
  },
  {
    id: 9,
    value: 'panel9',
    heading: 'What if I need help on my site down the road?',
    detail: 'We are only an email away! We’re here to help you as much or as little as you need, and we won’t disappear once the site is launched. We’ve been doing this for many years, so we aren’t going anywhere anytime soon.'
  },
  {
    id: 10,
    value: 'panel10',
    heading: "Can you take care of our company's website hosting?",
    detail: 'Absolutely. We currently manage the website hosting for the majority of our clients.'
  },
]


// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <MotionInView variants={varFadeIn}>
      {FAQS.map((accordion) => (
        <Accordion key={accordion.value}>
          <AccordionSummary expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}>
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MotionInView>
  );
}
