'use client';
import { arrowGreenUp, blog as blogImg } from '@/constants/images';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import GetInTouch from '@/components/shared/GetInTouch';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import BlogSlider from './Pagination';
import NextImage from 'next/image';


const SingleBlog = () => {
  const params = useParams();
  const [tagged, setTagged] = useState(false);
  const [sliced, setSliced] = useState(10);
  const [blog, setBlog] = useState<any>({});
  const [relatedBlogs, setRelatedBlogs] = useState<any>([]);
  const [imageloaded, setImageloaded] = useState(false);

  const handleTagged = () => {
    setTagged(!tagged);
  };

  const id = params.blogId;
  useEffect(
    () => {
      const fetchBlog = async (slug: any) => {
        try {
          //send post request
          const response = await fetch("https://svalbardexperts.com/api/story/" + slug, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setBlog(data.data);
          if (data.data.image) {
            const img = new Image();
            img.src = 'https://svalbardexperts.com/api/storyImages/' + data.data?.image;
            img.onload = () => {
              setImageloaded(true);
            };
          }
          setRelatedBlogs(data.relatedStories);
          return data;
        } catch (err) {
          throw new Error("Error fetching blogs");
        }
      };
      if (id && !blog.title) {
        fetchBlog(id);
      }
    }, [id]
  );

  return (
    <section>
      <div className='relative'>
        <NextImage
          src={blogImg}
          alt='Blogs'
          width={1512}
          height={400}
          className='md:block hidden w-full h-[400px]'
        />
        <NextImage
          src={blogImg}
          alt='Blogs'
          width={400}
          height={220}
          className='md:hidden w-full h-[220px] '
        />
        <div className='md:w-[74px] w-[38px] md:h-[74px] h-[38px] grid place-content-center rounded-full bg-black bg-opacity-60 absolute top-1/2 md:left-12 left-3'>
          <Link href='/blog'>
            <ChevronLeft className='text-white md:h-12 h-8 md:w-12 w-8' />
          </Link>
        </div>
      </div>
      <div className='md:mt-[90px] mt-14'>
        <h3 className='custom-header md:mb-14 mb-6'>Blog</h3>
        {/* <p className='custom-title md:mt-5 mt-2 md:mb-14 mb-6'>
          It’s easy, just leave your details here and we{' '}
          <span className='md:block' /> will contact you
        </p> */}
      </div>





      <div className='md:px-[99px] px-6'>
        <div className='md:grid md:grid-cols-[1fr_400px] md:gap-[47px]'>
          <div className=''>
            {!imageloaded ? (
              <div role="status" className=" animate-pulse w-full rounded-lg md:block hidden">
                <div className="flex items-center justify-center w-full bg-gray-300 rounded dark:bg-gray-700"
                  style={{
                    height: '462px',
                    boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.15)',
                    background: 'linear-gradient(90deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%)'
                  }}>
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              </div>
            ) : <>
              <img
                src={'https://svalbardexperts.com/api/storyImages/' + blog?.image}

                alt={blog.title}
                width={824}
                height={462}
                className={`w-full rounded-lg md:block hidden`}
              />
              <img
                src={'https://svalbardexperts.com/api/storyImages/' + blog?.image}
                alt={blog.title}
                width={380}
                height={223}
                className='w-full rounded-xl md:hidden'
              />
            </>}
            <div
              className='md:mt-10 mt-[13px] pb-1 md:pl-0 pl-4 md:pr-0 pr-[13px]'
              style={{
                borderBottom: '1px solid grey',
              }}
            >
              <h3 className='md:text-[46px] text-[26px] font-bold md:leading-[57px] leading-9 md:text-black text-[#017867]'>
                {blog.title}
              </h3>

              <div className='md:mt-9 mt-6 flex items-center justify-between'>
                <p className='md:text-[22px] text-[15px] md:leading-8 leading-6 font-normal text-gray'>
                  {blog.createdAt}
                </p>
                <p className='md:text-[22px] text-[15px] md:leading-8 leading-6 font-normal'>
                  {blog.categoryname}
                </p>
              </div>
            </div>

            <p className='md:text-[22px] text-[15px] md:leading-8 leading-6 md:mt-14 mt-6   font-normal md:pl-0 pl-4 md:pr-0 pr-[13px] text-[#42403F]'>
              {blog.description}
            </p>

            {/* Activities */}
            <div className='md:pl-0 pl-4 md:pr-0 pr-[13px]'>

              <p className='md:text-lg text-[15px] text-start font-normal md:leading-7 leading-6 text-[#42403F]'
                dangerouslySetInnerHTML={{ __html: blog.content }}
              >
              </p>
            </div>
          </div>

          {/* blogs */}
          <div className='md:grid hidden gap-[31px] h-max'>
            {relatedBlogs.map((item: any, i: number) => (
              <div
                style={{
                  boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.15)',
                }}
                className='rounded-[15.16px] text-white'
                key={i}
              >
                <div className='relative'>
                  <img
                    src={'https://svalbardexperts.com/api/storyImages/' + item.image}
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
                    <Link href={`/blog/${item.slug}`}>
                      <h3 className='text-[#017867] md:text-[28px] text-[15px] not-italic font-medium text-start md:mb-4 mb-2'>
                        {item.title}...
                      </h3>
                    </Link>
                    <p className='text-gray md:text-lg text-[10px] font-normal leading-[160%]'
                      dangerouslySetInnerHTML={{
                        __html: item.content?.substr(0, 73) + '...'
                      }}>
                    </p>
                  </div>
                  <div className='md:mt-16 mt-5 flex items-center justify-between '>
                    <p className='text-gray lg:text-lg text-[10px] font-normal leading-[160%]'>
                      <span className='text-darker'>{item.categoryname}</span>
                    </p>
                    <p className='text-black md:text-lg text-[10px] font-normal leading-[160%]'>
                      {item.createdAt}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className='md:grid hidden place-content-center'>
              {false ? (
                <Button
                  variant='paginate'
                  onClick={() => setSliced(sliced - 4)}
                >
                  <span className='text-lg leading-7 text-white'>
                    Show less
                  </span>
                  <span className='w-10 h-10 rounded-sm grid place-content-center bg-white'>
                    <NextImage src={arrowGreenUp} alt='Book now' />
                  </span>
                </Button>
              ) : (
                <Button
                  variant='paginate'
                // onClick={() => handleMorePosts}
                >
                  <span className='text-lg leading-7 text-white'>
                    More posts
                  </span>
                  <span className='w-10 h-10 rounded-sm grid place-content-center bg-white'>
                    <NextImage src={arrowGreenUp} alt='Book now' />
                  </span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden block mt-[60px] '>
        <h3 className='mb-6 text-[32px] leading-[43px] font-semibold px-6'>
          Latest blogs
        </h3>
        {/* TODO: replace this data with actual blogs from DB */}
        {/* <BlogSlider blogs={data} /> */}
        <BlogSlider blogs={relatedBlogs} />
      </div>
      <GetInTouch />
    </section>
  );
};

export default SingleBlog;
