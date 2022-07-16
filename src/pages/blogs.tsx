import { NextPage } from "next";
import Head from "next/head";
import blogService from "@services/blogs";
import Image from "next/image";

type BlogItem = {
  id?: number;
  title: string;
  categories: number[];
  link: string;
  date: Date;
  sourceUrl: string;
};

interface BlogsProps {
  items: BlogItem[];
  totalItem: string;
  totalPage: string;
}
const Blogs: NextPage<BlogsProps> = (blogs) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div>
        <ul>
          {blogs.items &&
            blogs.items.map((item) => (
              <li key={item.id}>
                <div style={{ position: "relative", width: "350px" }}>
                  <Image src={item.sourceUrl} alt={item.title} layout="fill" />
                  <div>
                    <h5>{item.title}</h5>
                    <div>
                      {new Date(item.date).toLocaleDateString("th-TH", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export const getServerSideProps = async (request: any) => {
  const { res } = request;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const result = await blogService.getBlogByCategory("video");
  let blogs = {
    items: [] as BlogItem[],
    totalItem: result.totalItem,
    totalPage: result.totalPage,
  };
  const items = result.items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const newItem: BlogItem = {
      id: item.id,
      title: item.title.rendered || "",
      categories: item.categories,
      link: item.link,
      date: item.date,
      sourceUrl: item._embedded["wp:featuredmedia"][0].source_url,
    };
    blogs.items ? blogs.items.push(newItem) : (blogs.items = [newItem]);
  }
  return { props: blogs };
};
export default Blogs;
