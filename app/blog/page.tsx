'use client';
import { Input } from '@/components/ui/input';
import {
  arrowGreenUp,
  arrowWhiteUp,
  blog,
  groupSquare,
  search,
  tripImg,
} from '@/constants/images';
import Image from 'next/image';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState,useLayoutEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Contact } from '@/components/Form/Contact';
import GetInTouch from '@/components/shared/GetInTouch';


const BlogPage = (props) => {
  console.log(props);
  const [selectedCategory, setSelectedCategory] = useState('categories');
  const [blogs, setBlogs] = useState([]);
  const [sliced, setSliced] = useState(8);
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const catresp = await fetch("https://svalbardexperts.com/api/story/getallcategories");
        const catdata = await catresp.json();
        const response = await fetch("https://svalbardexperts.com/api/story/getAllStories?search=&page=1");
        const data = await response.json();
        setBlogs(data.data);
        setCategories(catdata.data);
        return data.data;
      } catch (err) {
        throw new Error("Error fetching blogs");
      }
      // const data = await getBlogs();
      // setBlogs(data);
    };
    fetchData();
  }, []);

  const handleViewMore = () => {
    setSliced(sliced + 4);
  };

  const handleViewLess = () => {
    window.scrollTo(0, 4800);
    setSliced(sliced - 4);
  };

  //TODO: replace the data with actual blogs data
  const categorizedBlogs = blogs.filter((blog) => {
    if (selectedCategory === 'categories') return blog;
    return blog.categoryname === selectedCategory;
  });

  const slicedBlogs = categorizedBlogs.slice(0, sliced);

  const displayedBlogs = slicedBlogs.filter((blog) => {
    const blogTitle = blog.title.toLowerCase();
    const searchQuery = query.toLowerCase();

    return blogTitle.includes(searchQuery);
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);
  };

  return (
    <section className='relative'>
      <Image
        src={blog}
        alt='Blogs'
        width={1512}
        height={400}
        className='hidden md:block h-[400px] w-full'
      />

      <Image
        src={blog}
        alt='Blogs'
        width={400}
        height={220}
        className='md:hidden w-full h-[220px] '
      />
      <div className='md:mt-[90px] mt-[60px]'>
        <h3 className='custom-header md:mb-14 mb-6'>Blog</h3>

        {/* search query */}
        <div className='flex items-center justify-center md:gap-6 gap-3'>
          <div
            className='md:w-[690px] w-[178px] md:h-[60px] h-10 relative flex items-center md:rounded-md rounded-sm outline-none '
            style={{
              boxShadow:
                '4px 4px 12px 0px #0000001A, -4px -4px 12px 0px #0000001A',
            }}
          >
            <Image
              src={search}
              alt='search'
              className='absolute md:left-[26px] left-[10px] md:block hidden'
            />
            <Image
              src={search}
              alt='search'
              width={16}
              height={16}
              className='absolute md:left-[26px] left-[10px] md:hidden'
            />
            <Input
              className='h-full w-full text-gray md:text-[22px] text-[11px] leading-[33px] font-normal md:pl-24 pl-[30px] focus:outline-none'
              placeholder='Search...'
              onChange={handleSearch}
            />
          </div>
          {/* Category Select button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='bg-base md:h-[60px] h-10 md:w-[297px] w-[133px] md:rounded-md rounded-sm flex items-center md:justify-between'>
                <Image
                  src={groupSquare}
                  alt='Group Square'
                  className='ml-6 md:block hidden'
                />

                <Image
                  src={groupSquare}
                  alt='Group Square'
                  width={14}
                  height={14}
                  className='ml-2 mr-1 md:hidden'
                />
                <p className='md:text-[22px] text-[12px] text-white font-normal md:leading-[33px] leading-[18px] md:mr-0 mr-2 md:ml-0 ml-1.5'>
                  {selectedCategory}
                </p>

                <ChevronDown className='text-white text-3xl md:mr-2 mr-[1px]' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  onClick={() => setSelectedCategory(category.category)}
                  className='text-[11px]'
                >
                  {category.category}
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuCheckboxItem
                onClick={() => setSelectedCategory('categories')}
              >
                All categories
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='md:mt-[61px] mt-6 md:px-[100px] px-6 md:space-y-10 space-y-6'>
          {
            // TODO replace index with id
            displayedBlogs.map((blog, index) => (
              <div
                key={index}
                className='md:h-[430px] md:rounded-lg rounded-sm md:grid md:grid-cols-[610px_1fr] overflow-hidden'
                style={{
                  boxShadow: '0.74px 0px 20px 2.22px #3131311A',
                }}
              >
                <img
                  src={'https://svalbardexperts.com/api/storyImages/' + blog?.image}
                  alt={blog.title}
                  width={610}
                  height={427}
                  className='w-full h-full md:block hidden'
                />

                <div className='w-full md:hidden rounded-sm h-[276px] overflow-hidden '>
                  <img
                    src={'https://svalbardexperts.com/api/storyImages/' + blog?.image}
                    alt={blog.title}
                    width={382}
                    height={276}
                    className='h-full w-full'
                  />
                </div>
                <div className='md:pt-10 pt-[23px] md:pl-12 pl-4 pr-4 md:pb-24 pb-[23px] '>
                  <h3 className='md:text-[32px] text-2xl font-semibold md:leading-[47px] leading-[31px] text-[#2E3034]'>
                    {blog.title}
                  </h3>
                  <p className='md:mt-3 mt-2 md:mb-8 mb-6 md:text-lg text-[13px] text-gray font-normal md:leading-7 leading-5'
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.content?.substr(0, 73) + '...'
                    }}
                  >

                    {/* {blog.description.split(' ').slice(0, 20).join(' ')} */}
                  </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className='md:w-[170px] w-[135px] md:py-[6px] py-1 md:pl-[26px] pl-3 md:pr-[6px] pr-1 bg-base flex items-center justify-between md:rounded-[10px] rounded-sm '
                    style={{
                      boxShadow: '0px 4.01px 10.54px 0px #00000040',
                    }}
                  >
                    <span className='text-[15px]  leading-[24px] text-white'>
                      Show more
                    </span>
                    <span className='md:w-10 w-7 md:h-10 h-7 md:rounded-sm rounded-[5px] grid place-content-center bg-white'>
                      <Image
                        src={arrowGreenUp}
                        alt='Book now'
                        className='w-[12px] md:w-full'
                      />
                    </span>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
        <div className='md:mt-12 md:grid place-content-center hidden '>
          {sliced !== categorizedBlogs.length ? (
            <Button
              variant='primary'
              size='md'
              className='md:!w-[230px]'
              onClick={handleViewMore}
            >
              <span className='text-lg text-black font-medium leading-7'>
                View more
              </span>
              <span className='flex items-center justify-center bg-base w-[52px] h-[52px] rounded-md'>
                <Image src={arrowWhiteUp} alt='Arrow' />
              </span>
            </Button>
          ) : (
            <Button
              variant='primary'
              size='md'
              className='md:!w-[230px]'
              onClick={handleViewLess}
            >
              <span className='text-lg text-black font-medium leading-7'>
                View less
              </span>
              <span className='flex items-center justify-center bg-base w-[52px] h-[52px] rounded-md'>
                <Image src={arrowWhiteUp} alt='Arrow' />
              </span>
            </Button>
          )}
        </div>
      </div>
      <GetInTouch />
    </section>
  );
};
export const getServersideProps = async () => {

  const response = await fetch("https://svalbardexperts.com/api/story/getAllStories?search=&page=1");
  const data = await response.json();
  const catresp = await fetch("https://svalbardexperts.com/api/story/getallcategories");
  const catdata = await catresp.json();
  console.log(data);
  console.log(catdata);
  return {
    props: {
      blogs: data.data,
      categories: catdata.data
    }
  }
};

export default BlogPage;
