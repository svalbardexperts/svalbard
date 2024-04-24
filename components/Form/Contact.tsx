'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  phone: z.string().min(1, {
    message: 'phone number required',
  }),
});

// Fix the contact form
export function Contact() {
  const [ip, setIp] = useState('');
  const [countryCode, setCountryCode] = useState('');

  // API for IP address for form flag.
  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch('https://freeipapi.com/api/json');
      if (response.ok) {
        const country = await response.json();
        setCountryCode(country.countryCode.toLowerCase());
      } else {
        throw new Error('Failed to fetch IP address');
      }
    };
    fetchIp();
  }, []);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  // Output of the form
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response=await fetch('http://13.50.238.74/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values }),
    });
    const data=await response.json();
    if(response.ok){
      alert('Form submitted successfully');
  }

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        {/* Username */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='Name'
                  {...field}
                  className='md:p-[18px] p-3 pl-[14px] text-[#91959A] text-[15px] font-normal border-[#8B8F99] md:h-[52px] h-[44px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder='Email'
                  {...field}
                  className='md:p-[18px] p-3 pl-[14px] text-[#91959A] text-[15px] font-normal border-[#8B8F99] md:h-[52px] h-[44px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className='flex flex-col items-start'>
              <FormControl className='w-full'>
                <PhoneInput
                  country={countryCode}
                  placeholder='Phone number'
                  {...field}
                  containerClass='md:h-[52px] h-[44px] rounded-md bg-white'
                  containerStyle={{
                    borderWidth: 0,
                    border: '1px solid gray',
                    padding: '4px',
                  }}
                  inputClass='!h-full !w-full text-[#91959A] border-[#8B8F99] text-[15px] font-normal'
                  inputStyle={{
                    borderWidth: 0,
                    borderRadius: '10px',
                  }}
                  buttonStyle={{
                    borderRadius: '10px 0 0 10px',
                    borderWidth: 0,
                    borderRight: '1px solid gray',
                    backgroundColor: 'transparent',
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='md:pt-4'>
          <Button type='submit' variant='submit' className='md:h-[50px]'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
