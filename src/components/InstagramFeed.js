import Image from 'next/image';

export default function InstagramFeed() {
  const instagramPosts = [
    {
      src: "/InstagramImgs/post_1.png",
      alt: "Post 1",
      link: "https://www.instagram.com/p/DAZJn0qz_aE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_2.png",
      alt: "Post 2",
      link: "https://www.instagram.com/p/DAUvjQ9xZ7x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_3.png",
      alt: "Post 3",
      link: "https://www.instagram.com/p/DASHCW4vrnp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_4.png",
      alt: "Post 4",
      link: "https://www.instagram.com/p/DAOZoqkvEsd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_5.png",
      alt: "Post 5",
      link: "https://www.instagram.com/p/DAM3WLOPgK4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_6.png",
      alt: "Post 6",
      link: "https://www.instagram.com/p/DAHTYVaR1rT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_7.png",
      alt: "Post 7",
      link: "https://www.instagram.com/p/DAEs7qYTEDh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_8.png",
      alt: "Post 8",
      link: "https://www.instagram.com/p/C-GpYrsy9Ny/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      src: "/InstagramImgs/post_9.png",
      alt: "Post 9",
      link: "https://www.instagram.com/p/C-ES67XxjE6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  return (
    <div className="bg-[#001F5B] mx-auto p-4">
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
  );
}
