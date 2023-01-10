import React, { useEffect, useState } from "react";

const BlogContent = () => {
  const blogListData = [
    {
      id: 1,
      date: "21 April, 2021",
      title: "INCIDUNT VITAE NEW APPS 2022",
      imgURl:
        "https://bonx-react.pages.dev/static/1a621f264f37970b1736c359481d437e/a3c2c/7.webp",
    },
    {
      id: 2,
      date: "22 March, 2021",
      title: "THE HOT MORE-OR-LESS POINT @21",
      imgURl:
        "https://bonx-react.pages.dev/static/d161f004dec37a028adaf60369449636/a3c2c/8.webp",
    },
    {
      id: 3,
      date: "21 March, 2021",
      title: "PERFERENDIS HIC SINT ARE REM, INCIDUNT VITAE.",
      imgURl:
        "https://bonx-react.pages.dev/static/995f224cd12a5729662a62614f4eba85/a3c2c/3.webp",
    },
    {
      id: 4,
      date: "16 February, 2021",
      title: "NEW APPS HIC SINT ARE REM, INCIDUNT VITAE.",
      imgURl:
        "https://bonx-react.pages.dev/static/4cc8de25f33d7c35094f5a5a6ddc0d30/a3c2c/4.webp",
    },
    {
      id: 5,
      date: "21 January, 2021",
      title: "THE POINT OF USING LOREM IPSUM THAT MORE-OR-LESS NORMAL",
      imgURl:
        "https://bonx-react.pages.dev/static/7620f616365e9582a62497bfabddeaf3/a3c2c/5.webp",
    },
    {
      id: 6,
      date: "12 January, 2021",
      title: "ADIPISICING ELIT - LOREM IPSUM DOLOR.",
      imgURl:
        "https://bonx-react.pages.dev/static/fcc48abd8c829260eb31fd0cabe81d18/a3c2c/6.webp",
    },
    {
      id: 7,
      date: "18 April, 2020",
      title: "IF YOU HAVE SEEN APPLE RECENT JABS.",
      imgURl:
        "https://bonx-react.pages.dev/static/05605de0a0de0963ce1f967b7fbd7d6f/a3c2c/1.webp",
    },
  ];
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    setBlogList(blogListData);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 py-10 text-white lg:grid-cols-2 xl:grid-cols-3">
      {blogList.map((card, index) => (
        <div key={index} className="mx-auto w-[350px]">
          <img className="rounded-2xl" src={card.imgURl} alt="" />
          <div className="flex flex-col gap-2 p-2">
            <div className="flex gap-2">
              <i className="bi bi-calendar text-[rgb(177,84,204)]"></i>
              <span>{card.date}</span>
            </div>
            <div className="hover:text-[rgb(177,84,204)] duration-300 text-2xl cursor-pointer ">
              {card.title}
            </div>

            <div className="flex gap-5 items-center hover:text-[rgb(177,84,204)] duration-300 cursor-pointer">
              <div className="bg-[rgb(177,84,204)] w-[50px] h-[2px]"></div>{" "}
              <span>More Details</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
