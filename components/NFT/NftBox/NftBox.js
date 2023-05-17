import React, { useState } from "react";

import styles from "./NftBox.module.css";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";

const NftBox = ({
  img,
  artist,
  name,
  price,
  crypto,
  addNft,
  priceInDollar,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  /* const [displayPrice, setDisplayPrice] = useState(false); */

  return (
    <div className={styles.container}>
      <div className={styles.nftContainer}>
        <img
          /* onClick={() => setDisplayPrice((prevState) => !prevState)} */
          className={styles.snoop}
          src={img}
          alt="snoop"
        />
        <div className={styles.infoContainer}>
          <div className={styles.artistContainer}>
            <p className={styles.artist}>
              {artist}
              <VscVerifiedFilled size={15} color="rgb(84, 192, 231)" />
            </p>
            <button
              className={styles.fav}
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
            >
              {isHovering ? (
                <MdFavorite size={25} color="gold" />
              ) : (
                <MdFavoriteBorder size={25} color="gold" />
              )}
            </button>
          </div>
          <div className={styles.nameContainer}>
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>
              {price} {crypto}
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.add} onClick={addNft}>
              ADD
            </button>
            <button className={styles.buy}>BUY</button>
          </div>
          <img
            className={styles.crypto}
            src={`images/${crypto}.png`}
            alt="eth"
          />
          <p className={styles.priceInDollar}>${priceInDollar}</p>
        </div>
      </div>
    </div>
  );
};

export default NftBox;
