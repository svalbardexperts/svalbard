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
      'At the moment there are currently only flights to Svalbard from Norway, so getting to Svalbard requires to go to Oslo before flying to Longyearbyen. There is usually one or two flights to Svalbard per day.',
  },
  {
    id: '2',
    title: 'What do we offer?',
    answer: `* Planning the trip by days with a personalized itinerary.
      * Booking all hotels in Svalbard.
      * Booking ferries within Svalbard from Longyearbyen to Pyrmayden, Brentsburg, and Ny Ålesund.
      * Booking all attractions and activities in Svalbard.
      * Recommendations for restaurants and bars in Svalbard.
      * Recommendations for appropriate clothing in Svalbard.
      `,
  },
  {
    id: '3',
    title: 'What is the recommended travel time in Svalbard?',
    answer:
      'In our opinion, the ideal duration for a trip to Svalbard is at least six days. This allows you to explore most of the island and experience many of the attractions it offers. It is possible to extend or shorten the trip by several days to tailor it to your personal needs.',
  },
  {
    id: '4',
    title: 'What time of the year can you visit Svalbard?',
    answer:
      'You can visit Svalbard all year round. There is a fundamental difference between the type of trip in the summer season and the winter season. A trip during the summer offers the possibility of taking a ferry ride to all parts of the island, trekking, and, of course, daylight throughout the whole day. A trip in the winter offers views of the northern lights, winter activities such as snowmobiling and dog sledding, and also lower costs.',
  },
  {
    id: '5',
    title: 'Why do you need our help in planning your trip to Svalbard?',
    answer:
      "Planning a trip to Svalbard requires knowing the place well and taking into account the weather conditions to maximize the available time. That's exactly why we are here, with experts in this area who can offer their help in planning a trip to Svalbard.",
  },
  {
    id: '6',
    title: 'How far in advance to book the trip to Svalbard?',
    answer:
      'As accommodation is usually completely full in Svalbard during the summer season, we would recommend booking the trip as soon as possible, and at least six months before arrival to secure your place on the island for the upcoming season.',
  },
  {
    id: '7',
    title: 'When is the most likely to see the northern lights?',
    answer:
      'The best time to see the northern lights is during the winter season, usually between the beginning of October and the end of February. Since it is dark in Svalbard almost all days in the winter, the chance of seeing the northern lights is one of the highest in the world.',
  },
  {
    id: '8',
    title:
      'What is the difference between the private tour package and our regular tour package?',
    answer:
      'On a private trip you will have a local guide with you throughout your time in Svalbard. They will travel with you to all the locations, so that you will have someone local with you for the entire trip, who will be able to add value to the experience in Svalbard.',
  },
];

interface Props {
  question: {
    id: string;
    title: string;
    answer: string;
  };
  i: number;
}

const FAQs = () => {
  return (
    <section className='md:py-[100px] py-10 md:px-[90px] px-6 bg-base rounded-lg relative'>
      {/* section title */}
      <div className=''>
        <h3 className='font-bold md:text-[55px] text-[32px] md:leading-[66px] leading-[48px] text-center text-[#E4FFFF]'>
          Frequently Asked{' '}
          <span className='bg-white text-[#2E3034] md:rounded-lg rounded-md md:p-2.5 p-1'>
            Questions
          </span>
        </h3>
        <p className='hidden md:block font-normal text-[22px] leading-[33px] text-center text-[#FBFDFC] md:mt-[27px]'>
          We’ve added answers to common questions you might have. We{' '}
          <span className='block' /> can answer more questions by phone or
          email.
        </p>
      </div>

      <div className='md:mt-14 mt-8 space-y-2'>
        {questions.map((question, i) => (
          <Questions question={question} key={question.id} i={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

function Questions({ question, i }: Props) {
  const { id, title, answer } = question;

  const trimmedAnwers: string[] = !answer.includes('*')
    ? []
    : answer.split(/\*\s*/).filter((line) => line.trim() !== '');

  return (
    <Accordion
      type='single'
      collapsible
      className='w-full md:py-8 py-3 md:pl-10 pl-3 md:pr-6 pr-[17px] rounded-sm bg-baseWhite relative overflow-hidden'
    >
      <AccordionItem value={id} className='border-0'>
        <AccordionTrigger className='hover:no-underline md:text-[26px] text-[16px] md:leading-9 leading-[26px] font-medium text-start'>
          {title}
        </AccordionTrigger>
        <AccordionContent className='md:text-lg text-[10px] text-gray font-normal md:leading-7 leading-[18px]'>
          {i === 1 ? (
            <ul className='list-disc'>
              {trimmedAnwers.map((answer) => (
                <li key={answer} className='flex items-start '>
                  <span className='md:pr-[2px] pr-[1px]'>*</span>
                  <div>{answer}</div>
                </li>
              ))}
            </ul>
          ) : (
            answer
          )}
        </AccordionContent>
      </AccordionItem>
      <div className='w-[55px] h-3 bg-base grid place-content-center absolute -right-3 bottom-0 -rotate-45'>
        <div className='w-[55px] h-[6px] bg-[#0BCAAD]'></div>
      </div>
    </Accordion>
  );
}
