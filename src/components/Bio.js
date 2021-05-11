import React from "react";
import { Follow } from "react-twitter-widgets";
import styles from "./Bio.module.scss";

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Escrito por <strong>{config.userName}</strong> en Buenos Aires, Argentina.
      {` `}
      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    </p>
  </>
);

export default Bio;
