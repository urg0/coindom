import React from "react";

import { css } from "@emotion/css";

import NewsList from "components/News/NewsList/NewsList";
import Explore from "components/WelcomePage/Explore/Explore";

const News = () => {
  return (
    <div>
      <h1
        className={css`
          background-color: rgb(30, 30, 55);
          padding: 10rem;
          padding-bottom: 5rem;
          text-align: center;
          background-image: linear-gradient(
            to left,
            rgb(226, 204, 193),
            rgb(203, 250, 245),
            rgb(146, 169, 237),
            rgb(193, 179, 243),
            rgb(226, 204, 193)
          );
          color: rgb(229, 210, 101);
          font-size: 3rem;
        `}
      >
        Latest News
      </h1>
      <NewsList />
      <Explore />
    </div>
  );
};

export default News;
