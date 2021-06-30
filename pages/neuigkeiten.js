import Head from "next/head";
import pages from "../styles/Pages.module.css";
import FacebookPost from "../components/FacebookPost";
import { useState, useEffect } from "react";

const Neuigkeiten = () => {
  const [posts, setPosts] = useState();

  // Get facebook posts
  useEffect(() => {
    fetch("http://localhost:3000/api/fbGroupInfo").then(async (res) => {
      const parsedResponse = await res.json();
      console.log(parsedResponse);

      // Push fb posts to state
      setPosts(parsedResponse.data);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Neuigkeiten</title>
        <meta
          name="description"
          content="Neues aus dem Jugendzentrum für Senioren."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pages.main}>
        <div className={pages.section}>
          <h1>Neuigkeiten</h1>
          <div>
            {posts &&
              posts.map((post) => (
                <FacebookPost
                  key={post.id}
                  message={post.message}
                  created={post.created_time}
                  imgUrl={
                    post.attachments && post.attachments.data[0].media.image.src
                  }
                />
              ))}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block", margin: "0 0 -2px -2px" }}
      >
        <path
          fill="#394D98"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,170.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Neuigkeiten;
