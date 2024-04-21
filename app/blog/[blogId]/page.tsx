'use client';
import { arrowGreenUp, tripImg } from '@/constants/images';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import GetInTouch from '@/components/shared/GetInTouch';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import BlogSlider from './Pagination';

const data = [
  {
    img: 'https://i.postimg.cc/RZ8g2NfR/8.jpg',
    title: 'Booking a Private Guide in Svalbard',
    category: 'category 4',
    description: 'Booking a Private Guide in Svalbard',
    date: 'May 28, 2020 10:25:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  },
  {
    img: 'https://i.postimg.cc/85dwF4YK/9.jpg',
    title: 'The Best Things to Do in Svalbard',
    category: 'category 4',
    description:
      'Svalbard, an archipelago situated in the Arctic Ocean, is a place of rugged beauty and pristine wilderness. Despite its remote location and extreme weather conditions, Svalbard offers a plethora of activities and attractions that cater to adventurers, nature enthusiasts, and curious travelers alike. From witnessing breathtaking landscapes to encountering unique wildlife, here are some of the best things to do in Svalbard"',
    date: 'FEB 28, 2022 10:15:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  },
  {
    img: 'https://i.postimg.cc/Hsn4HTTP/10.jpg',
    title: "Svalbard's Summer Symphony of Arctic Adventures",
    category: 'category 2',
    description:
      'While winter casts a mesmerizing spell over Svalbard with its icy landscapes and celestial displays, the summer months bring a different kind of magic to this Arctic archipelago. As the snow melts and',
    date: 'AUG 28, 2021 10:25:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  },
  {
    img: 'https://i.postimg.cc/q7s2QRGg/11.jpg',
    title:
      'Unveiling the Arctic Charms: As Look into Accommoda-tions in Svalbard',
    category: 'category 2',
    description:
      'Unveiling the Arctic Charms: A Look into Accommodations in Svalbard Nestled in the far reaches of the Arctic Circle, Svalbard stands as an enchanting archipelago known',
    date: 'DEC 28, 2020 11:52:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  },
  {
    img: 'https://i.postimg.cc/9FDTK1B6/12.jpg',
    title: 'Witnessing the Enchanting Northern Lights in Svalbard',
    category: 'category 2',
    description:
      'Witnessing the Enchanting Northern Lights in Svalbard The Arctic wonderland of Svalbard, located at the northern reaches of the world, is renowned for its breathtaking landscapes',
    date: 'OCT 08, 2021 10:25:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  },
];

const SingleBlog = () => {
  const params = useParams();
  const [tagged, setTagged] = useState(false);
  const [sliced, setSliced] = useState(10);
  const [blog, setBlog] = useState({});
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const handleTagged = () => {
    setTagged(!tagged);
  };

  const id = params.blogId;
  useEffect(
    () => {
      const fetchBlog = async (slug) => {
        try {

          //send post request
          const response = await fetch("http://13.50.238.74:5000/story/" + slug, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log('data', data);
          setBlog(data.data);
          setRelatedBlogs(data.relatedStories);
          return data;
        } catch (err) {
          throw new Error("Error fetching blogs");
        }
      };
      if (id) {
        fetchBlog(id);
      }
    }, []
  );

  console.log(blog);
  // TODO; replace this single data with actual one from database
  const data = {
    img: 'https://i.postimg.cc/SNk7PcPq/1.jpg',
    title: 'The Best Things to Do in Svalbard',
    category: 'category 1',
    description:
      'Svalbard, an archipelago situated in the Arctic Ocean, is a place of rugged beauty and pristine wilderness. Despite its remote location and extreme weather conditions, Svalbard offers a plethora of activities and attractions that cater to adventurers, nature enthusiasts, and curious travelers alike. From witnessing breathtaking landscapes to encountering unique wildlife, here are some of the best things to do in Svalbard',
    date: 'May 28, 2021 10:25:00 UTC',
    activities: [
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-1.jpg',
        activityTitle: 'Polar Bear Spotting',
        activityDescription: [
          'Svalbard is home to one of the largest populations of polar bears on Earth. One of the most thrilling experiences you can have in Svalbard is embarking on a polar bear spotting expedition. Experienced guides lead excursions into the wilderness, where you can observe these majestic creatures in their natural habitat, albeit from a safe distance.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/0Nk7WvXf/1-2.jpg',
        activityTitle: 'Arctic Wildlife Safaris',
        activityDescription: [
          'Beyond polar bears, Svalbard is teeming with diverse wildlife. Embark on a wildlife safari to spot reindeer, Arctic foxes, seals, walruses, and various bird species including puffins and kittiwakes. The unique ecosystem of Svalbard offers unparalleled opportunities for wildlife enthusiasts and photographers.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Witnessing the Northern Lights',
        activityDescription: [
          'Svalbard is one of the best places on Earth to witness the mesmerizing spectacle of the Northern Lights. From late autumn to early spring, the Arctic skies come alive with vibrant hues of green, pink, and purple. Venture outside the settlements, away from artificial light pollution, for the best chance to witness this celestial phenomenon.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/7h3vZS1w/4.png',
        activityTitle: 'Dog Sledding Adventures',
        activityDescription: [
          'Embrace the Arctic tradition of dog sledding by embarking on a thrilling sled ride through the snowy wilderness. Feel the exhilaration as a team of energetic huskies pulls you across the pristine landscapes of Svalbard. Dog sledding tours cater to both beginners and experienced mushers, offering a unique perspective of the Arctic terrain.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/zB9Hj9cD/1-5.jpg',
        activityTitle: 'Exploring Longyearbyen',
        activityDescription: [
          "As the largest settlement in Svalbard, Longyearbyen offers a blend of modern amenities and Arctic charm. Explore the colorful streets lined with traditional Norwegian houses, visit museums such as the Svalbard Museum to learn about the archipelago's history and culture, and indulge in local cuisine at cozy restaurants and cafes.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/4y6y1ncw/1-6.jpg',
        activityTitle: 'Arctic Kayaking and Ice Caving',
        activityDescription: [
          "For those seeking adventure off the beaten path, kayaking amidst icy fjords and exploring mesmerizing ice caves are unforgettable experiences in Svalbard. Paddle through crystal-clear waters while surrounded by towering glaciers and rugged cliffs, or venture into ice caves sculpted by nature's hand over millennia.",
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/s2b2d59w/1-7.jpg',
        activityTitle: 'Visit the Svalbard Global Seed Vault',
        activityDescription: [
          'Dubbed the "Doomsday Vault," the Svalbard Global Seed Vault serves as a backup storage facility for seeds from around the world, safeguarding agricultural biodiversity in the face of global crises.',
          'While access to the interior is restricted, visitors can marvel at the futuristic architecture of the facility and learn about its crucial role in preserving plant genetic diversity.',
        ],
      },
      {
        activityImg: 'https://i.postimg.cc/65BpXWnJ/1-8.jpg',
        activityTitle: 'Hiking and Glacier Exploration',
        activityDescription: [
          "Lace up your hiking boots and embark on an exploration of Svalbard's breathtaking landscapes. From gentle coastal walks to challenging mountain hikes, there are trails suitable for adventurers of all levels. Marvel at the towering glaciers, icy fjords, and panoramic vistas that define the Arctic wilderness..",
          "In conclusion, Svalbard offers a wealth of experiences for intrepid travelers seeking to explore the wonders of the Arctic. Whether you're drawn to its abundant wildlife, stunning natural scenery, or unique cultural heritage, Svalbard promises an adventure unlike any other. Embrace the spirit of exploration and immerse yourself in the beauty of this remote Arctic paradise.",
        ],
      },
    ],
  };

  {
    /* TODO: replce data with blogs from database and i with blog id */
  }
  const slicedBlogs = 'hi';

  return (
    <section>
      <div className='relative'>
        <Image src={tripImg} alt='Blogs' width={15512} height={890} />
        <div className='hidden md:w-[104px] md:h-[104px] md:grid place-content-center rounded-full bg-black bg-opacity-60 absolute top-1/3 left-12'>
          <Link href='/blog'>
            <ChevronLeft className='text-white h-16 w-16' />
          </Link>
        </div>
      </div>
      <div className='md:mt-[120px]'>
        <h3 className='custom-header'>Blog</h3>
        <p className='custom-title md:mt-5 mt-2 md:mb-14 mb-6'>
          It’s easy, just leave your details here and we{' '}
          <span className='block' /> will contact you
        </p>
      </div>
      <div className='md:px-[99px] px-6'>
        <div className='md:grid md:grid-cols-[1fr_400px] md:gap-[47px]'>
          <div className=''>
            <img
              src={'http://13.50.238.74:5000/storyImages/' + blog?.image}

              alt={blog.title}
              width={824}
              height={462}
              className='w-full rounded-lg md:block hidden'
            />
            <img
              src={'http://13.50.238.74:5000/storyImages/' + blog?.image}
              alt={blog.title}
              width={380}
              height={223}
              className='w-full rounded-xl md:hidden'
            />

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
              {/* {blog.activities.map((acitivity, i) => (
                <div key={i * Math.random()}>
                  <Image
                    src={acitivity.activityImg}
                    alt={acitivity.activityTitle}
                    width={824}
                    height={462}
                    className='my-10 rounded-lg md:block hidden'
                  />

                  <Image
                    src={acitivity.activityImg}
                    alt={acitivity.activityTitle}
                    width={351}
                    height={206}
                    className='my-4 rounded-lg md:hidden'
                  />

                  <h4 className='md:text-lg text-[15px] text-start font-bold leading-7'>
                    {i + 1}. {acitivity.activityTitle}:
                  </h4>
                  <div className='md:space-y-4 space-y-2'>
                    {acitivity.activityDescription.map((text) => (
                      <p
                        className='md:text-lg text-[15px] text-start font-normal md:leading-7 leading-6 text-[#42403F]'
                        key={text}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))} */}
            </div>
          </div>

          {/* blogs */}
          <div className='md:grid hidden gap-[31px] h-max'>
            {relatedBlogs.map((item, i) => (
              <div
                style={{
                  boxShadow: '4px 4px 12px 0px rgba(0, 0, 0, 0.15)',
                }}
                className='rounded-[15.16px] text-white'
                key={i}
              >
                <div className='relative'>
                  <img
                    src={'http://13.50.238.74:5000/storyImages/' + item.image}
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
              {sliced === data.length ? (
                <Button
                  variant='paginate'
                  onClick={() => setSliced(sliced - 4)}
                >
                  <span className='text-lg leading-7 text-white'>
                    Show less
                  </span>
                  <span className='w-10 h-10 rounded-sm grid place-content-center bg-white'>
                    <Image src={arrowGreenUp} alt='Book now' />
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
                    <Image src={arrowGreenUp} alt='Book now' />
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
