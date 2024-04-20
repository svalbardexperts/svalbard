'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  blogs: {
    // id: string;
    img: string;
    title: string;
    description: string;
    date: string;
    category: string;
  }[];
}

function BlogSlider({ blogs }: Props) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {blogs.map((blog) => (
          //TODO:   <SwiperSlide key={blog.id}>
          <SwiperSlide key={blog.title}>
            {' '}
            <Card blog={blog} />{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function Card({
  blog,
}: {
  blog: {
    _id: string;
    img: string;
    image: string;
    title: string;
    content: string;
    createdAt: string;
    categoryname: string;
    slug: string;
  };
}) {
  const [tagged, setTagged] = useState(false);

  const handleTagged = () => {
    setTagged(!tagged);
  };
  const { _id: id, image: img, title, createdAt: date, categoryname: category, content, slug } = blog;

  const blogTitle = title.split(" ").slice(0, 5).join(" ");
  const blogDescription = content;
  return (
    <div className='px-6'>
      <div
        style={{
          boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.15)',
        }}
        className='rounded-[15.16px] text-white'
      >
        <div className='relative'>
          <img
            src={'http://localhost:5000/storyImages/' + img}
            alt='blog image'
            width={416}
            height={272}
            className='w-full rounded-[15px]'
          />
          <button
            className='absolute top-8 right-8 h-[45px] w-[45px] rounded-full bg-base flex items-center justify-center'
            onClick={handleTagged}
          >
            {tagged ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
        <div className='pt-4 pr-[22px] pb-8 pl-5'>
          <div>
            {/* TODO: replace with id */}
            {/* <Link href={`/blog/${id}`}> */}
            <Link href={`/blog/${slug}`}>
              <h3 className='text-[#017867] text-[15px] not-italic font-medium leading-[130%] text-start md:mb-4 mb-2'>
                {blogTitle}...
              </h3>
            </Link>
            <p className='text-gray text-[11px] font-normal leading-[160%]' dangerouslySetInnerHTML={{ __html: blogDescription }}></p>
          </div>
          <div className='md:mt-16 mt-5 flex items-center justify-between '>
            <p className='text-gray lg:text-lg text-[10px] font-normal leading-[160%]'>
              <span className='text-darker'>{category}</span>
            </p>
            <p className='text-gray text-[9px] font-normal leading-[160%]'>
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSlider;
