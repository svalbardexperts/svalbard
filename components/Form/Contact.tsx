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
import { PhoneInput } from '@/components/ui/phone-input';
import { Input } from '@/components/ui/input';
import { isValidPhoneNumber } from 'react-phone-number-input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
});

// Fix the contact form
export function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
    },
  });

  // Output of the form
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        {/* Username */}
        <FormField
          control={form.control}
          name='username'
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
                <PhoneInput placeholder='Phone number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='md:pt-4'>
          <Button type='submit' variant='submit'>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
