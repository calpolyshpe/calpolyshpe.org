import Image from 'next/image';

export default function InstagramFeed() {
  const instagramPosts = [
    {
      src: "/InstagramImgs/post_1.png",
      alt: "Post 1",
      link: "https://www.instagram.com/p/DFyRLnwzNFu/",
    },
    {
      src: "/InstagramImgs/post_2.png",
      alt: "Post 2",
      link: "https://www.instagram.com/shpecalpoly/p/DFowdf4RCm0/",
    },
    {
      src: "/InstagramImgs/post_3.png",
      alt: "Post 3",
      link: "https://www.instagram.com/p/DFoK4sYyAAd/",
    },
    {
      src: "/InstagramImgs/post_4.png",
      alt: "Post 4",
      link: "https://www.instagram.com/shpecalpoly/p/DFhFNOzRnQF/",
    },
    {
      src: "/InstagramImgs/post_5.png",
      alt: "Post 5",
      link: "https://www.instagram.com/shpecalpoly/p/DFazd4iyJWI/",
    },
    {
      src: "/InstagramImgs/post_6.png",
      alt: "Post 6",
      link: "https://www.instagram.com/p/DFYlKizzxeU/",
    },
    {
      src: "/InstagramImgs/post_7.png",
      alt: "Post 7",
      link: "https://www.instagram.com/shpecalpoly/p/DFWgz2yvOhb/",
    },
    {
      src: "/InstagramImgs/post_8.png",
      alt: "Post 8",
      link: "https://www.instagram.com/p/DFVo9UDS3Px/",
    },
    {
      src: "/InstagramImgs/post_9.png",
      alt: "Post 9",
      link: "https://www.instagram.com/p/DFGTun6Rd1Z/",
    },
  ];

  return (
    <div className="bg-[#001F5B] mx-auto p-4 flex justify-center items-center">
      <div className="lg:w-3/5 w-3/4 h-auto">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {instagramPosts.map((post, index) => (
            <div key={index} className="w-full">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  layout="responsive"
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                  priority
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
      
  );
}
