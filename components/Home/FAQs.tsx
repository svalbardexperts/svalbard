'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const questions = [
  {
    id: '1',
    title: 'How do you get to Svalbard?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '2',
    title: 'What do we offer?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '3',
    title: 'What is the recommended travel time in Svalbard?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '4',
    title: 'What time of the year can you visit Svalbard?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '5',
    title: 'Why do you need our help in planning your trip to Svalbard?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '6',
    title: 'How far in advance to book the trip to Svalbard?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '7',
    title: 'When is the most likely to see the northern lights?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
  {
    id: '8',
    title:
      'What is the difference between the private tour package and our regular tour package?',
    answer:
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one flight to Svalbard per day.',
  },
];

interface Props {
  question: {
    id: string;
    title: string;
    answer: string;
  };
}

const FAQs = () => {
  return (
    <section className='md:py-[100px] md:px-[90px] bg-base rounded-lg relative'>
      {/* section title */}
      <div className=''>
        <h3 className='font-bold text-[55px] leading-[66px] text-center text-[#E4FFFF]'>
          Frequently Asked{' '}
          <span className='bg-white text-[#2E3034] rounded-lg'>Question</span>
        </h3>
        <p className='font-normal text-[22px] leading-[33px] text-center text-[#FBFDFC] md:mt-[27px]'>
          We’ve added answers to common questions you might have we{' '}
          <span className='block' /> can answer more questions by phone or
          email.
        </p>
      </div>

      <div className='md:mt-14 space-y-2'>
        {questions.map((question) => (
          <Questions question={question} key={question.id} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

function Questions({ question }: Props) {
  const { id, title, answer } = question;

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full py-8 pl-10 pr-6 rounded-sm bg-baseWhite relative overflow-hidden'
    >
      <AccordionItem value={id} className='border-0'>
        <AccordionTrigger className='hover:no-underline text-[26px] leading-9 font-medium text-start'>
          {title}
        </AccordionTrigger>
        <AccordionContent className='text-lg text-gray font-normal leading-7'>
          {answer}
        </AccordionContent>
      </AccordionItem>
      <div className='w-[55px] h-3 bg-base grid place-content-center absolute -right-3 bottom-0 -rotate-45'>
        <div className='w-[55px] h-[6px] bg-[#0BCAAD]'></div>
      </div>
    </Accordion>
  );
}
