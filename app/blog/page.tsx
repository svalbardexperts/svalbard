'use client';
import { Input } from '@/components/ui/input';
import {
  arrowGreenUp,
  arrowWhiteUp,
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
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Contact } from '@/components/Form/Contact';
import GetInTouch from '@/components/shared/GetInTouch';

type Checked = DropdownMenuCheckboxItemProps['checked'];

// const categories = [
//   'category 1',
//   'category 2',
//   'category 3',
//   'category 4',
//   'category 5',
// ];

// TODO: remove this data after databse integration
const data = [
  {
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
  },
  {
    img: 'https://i.postimg.cc/RVwCWHC3/2.jpg',
    title: "Svalbard's Summer Symphony of Arctic Adventures",
    category: 'category 1',

    description:
      'While winter casts a mesmerizing spell over Svalbard with its icy landscapes and celestial displays, the summer months bring a different kind of magic to this Arctic archipelago. As the snow melts and',
    date: 'May 8, 2021 01:25:00 UTC',

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
    img: 'https://i.postimg.cc/GmqCDPWp/3.jpg',
    title:
      'Unveiling the Arctic Charms: As Look into Accommoda-tions in Svalbard',
    category: 'category 1',

    description:
      'Unveiling the Arctic Charms: A Look into Accommodations in Svalbard Nestled in the far reaches of the Arctic Circle, Svalbard stands as an enchanting archipelago known',
    date: 'Apr 28, 2022 10:25:00 UTC',

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
    img: 'https://i.postimg.cc/7h3vZS1w/4.png',
    title: 'Witnessing the Enchanting Northern Lights in Svalbard',
    category: 'category 2',
    description:
      'Witnessing the Enchanting Northern Lights in Svalbard The Arctic wonderland of Svalbard, located at the northern reaches of the world, is renowned for its breathtaking landscapes',
    date: 'JAN 20, 2023 08:25:00 UTC',
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
    img: 'https://i.postimg.cc/pL0wrWjh/5.jpg',
    title:
      'Exploring the Enchanting Wilderness: Must-Visit Attractions in Svalbard',
    category: 'category 3',
    description:
      'Exploring the Enchanting Wilderness: Must-Visit Attractions in Svalbard Nestled amidst the Arctic Ocean, Svalbard is a remote and captivating archipelago that beckons adventurous',
    date: 'JUN 02, 2020 06:25:00 UTC',
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
    img: 'https://i.postimg.cc/ZnFgS4Zq/6.jpg',
    title: 'Exploring Longyearbyen: The Enchanting Arctic Frontier',
    category: 'category 3',
    description:
      'Exploring Longyearbyen: The Enchanting Arctic Frontier Tucked away on the remote archipelago of Svalbard, Longyearbyen stands as a testament to human perseverance in the face of extre',
    date: 'May 28, 2023 10:00:00 UTC',

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
    img: 'https://i.postimg.cc/YqRVDrbn/7.jpg',
    title: 'How to Find a Travel Agency in Svalbard',
    category: 'category 2',
    description:
      'How to Find a Travel Agency in Svalbard Svalbard, with its awe-inspiring landscapes and unique polar allure, has emerged as a sought-after travel destination for adventurous souls. To make the most of your',
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
  },
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

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('categories');
  const [blogs, setBlogs] = useState([]);
  const [sliced, setSliced] = useState(8);
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => { 
    const fetchData = async () => {
      try {

        const catresp = await fetch("http://13.50.238.74:5000/story/getallcategories");
        const catdata = await catresp.json();
        const response = await fetch("http://13.50.238.74:5000/story/getAllStories?search=&page=1");
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
  // console.log(categories);
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
    <section>
      <Image
        src={tripImg}
        alt='Blogs'
        width={1512}
        height={890}
        className='hidden md:block w-full'
      />
      ;
      <Image
        src={tripImg}
        alt='Blogs'
        width={430}
        height={431}
        className='md:hidden w-full'
      />
      ;
      <div className='md:mt-[120px] mt-[60px] custom-shadow'>
        <h3 className='custom-header'>Blog</h3>
        <p className='custom-title md:mt-5 mt-2 md:mb-14 mb-6'>
          It’s easy, just leave your details here and we{' '}
          <span className='block' /> will contact you
        </p>
        {/* search query */}
        <div className='flex items-center justify-center md:gap-6 gap-3'>
          <div
            className='md:w-[690px] w-[178px] md:h-[60px] h-10 relative flex items-center md:rounded-md rounded-sm outline-none'
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
              <button className='bg-base md:h-[60px] h-10 md:w-[297px] w-[131px] md:rounded-md rounded-sm flex items-center md:justify-between'>
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
                <p className='md:text-[22px] text-[11px] text-white font-normal md:leading-[33px] leading-[18px] md:mr-0 mr-7'>
                  {selectedCategory}
                </p>

                <ChevronDown className='text-white text-3xl md:mr-2' />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category}
                  onClick={() => setSelectedCategory(category.category)}
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
                className='md:h-[430px]  md:rounded-lg rounded-sm md:grid md:grid-cols-[610px_1fr] overflow-hidden'
                style={{
                  boxShadow: '0.74px 0px 20px 2.22px #3131311A',
                }}
              >
                <img
                  src={'http://13.50.238.74:5000/storyImages/' + blog?.image}
                  alt={blog.title}
                  width={610}
                  height={427}
                  className='w-full h-full md:block hidden'
                />

                <div className='w-full md:hidden rounded-sm h-[276px] overflow-hidden'>
                  <img
                    src={'http://13.50.238.74:5000/storyImages/' + blog?.image}
                    alt={blog.title}
                    width={382}
                    height={276}
                    className='h-full w-full'
                  />
                </div>
                <div className='md:pt-10 pt-[23px] md:pl-12 pl-4 md:pb-24 pb-[23px] '>
                  <h3 className='md:text-[36px] text-2xl font-semibold md:leading-[49px] leading-[31px] text-[#2E3034]'>
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
        <div className='md:mt-12 grid place-content-center md:block hidden '>
          {sliced !== categorizedBlogs.length ? (
            <Button
              variant='primary'
              size='md'
              onClick={() => setSliced(sliced + 4)}
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
              onClick={() => setSliced(sliced - 4)}
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

export default BlogPage;
