import { GetServerSideProps, NextPage } from "next";

import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet eiusmod lacinia mi non.",
      content:
        "Lorem ipsum dolor sit amet eiusmod lacinia mi non. Adipiscing duis tincidunt lectus nulla integer enim facilisi dui.",
      published: false,
      author: {
        name: "Gabriel de Jesus",
        email: "hi@gabrieldejesus.dev",
      },
    },
  ];
  return { props: { feed } };
};

type Props = {
  feed: PostProps[];
};

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
