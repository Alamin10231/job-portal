import { motion } from "framer-motion";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    {
      title: "Content Writer",
      jobs: 5,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/content-writer.svg",
    },
    {
      title: "Human Resource",
      jobs: 2,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/human-resource.svg",
    },
    {
      title: "Marketing Research",
      jobs: 3,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/human-resource.svg",
    },
    {
      title: "Retail & Product",
      jobs: 4,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/retail.svg",
    },
    {
      title: "Software",
      jobs: 1,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/research.svg",
    },
    {
      title: "Finance",
      jobs: 4,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2023/03/finance.svg",
    },
    {
      title: "Management",
      jobs: 4,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/management.svg",
    },
    {
      title: "Marketing & Sales",
      jobs: 4,
      img: "https://jthemes.net/themes/wp/jobbox/wp-content/uploads/2024/12/marketing.svg",
    },
  ];

  const renderItems = items.map((job, index) => (
    <div
      key={index}
      className="flex flex-col items-center space-y-4 shadow-md px-6 py-4 bg-white border border-gray-200 rounded-lg justify-center"
    >
      <img
        src={job.img}
        alt={job.title}
        className="w-16 h-16 object-contain"
        onDragStart={handleDragStart}
      />
      <div className="text-center">
        <h5 className="font-semibold text-gray-700 hover:text-blue-600">{job.title}</h5>
        <p className="text-gray-500">{job.jobs} jobs available</p>
      </div>
    </div>
  ));

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        Popular Job Categories
      </h2>
      <div className="px-4">
        <AliceCarousel
          mouseTracking
          items={renderItems}
          autoPlay
          infinite
          disableButtonsControls
          autoPlayInterval={2500}
          responsive={{
            0: {
              items: 1, // 1 item on small screens
            },
            600: {
              items: 2, // 2 items on medium screens
            },
            1024: {
              items: 3, // 3 items on large screens
            },
            1280: {
              items: 4, // 4 items on extra-large screens
            },
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
