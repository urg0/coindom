import React, { useContext } from "react";

import styles from "./ShoppingCartItem.module.css";

import { CryptocurrenciesContext } from "store/cryptocurrencies-store";

import { BsFillTrash3Fill } from "react-icons/bs";
import { VscVerifiedFilled } from "react-icons/vsc";
import { ShoppingCartContext } from "store/shopping-card-store";

const ShoppingCartItem = ({
  img,
  artist,
  name,
  price,
  crypto,
  addNft,
  priceInDollar,
}) => {
  /* const [isHovering, setIsHovering] = useState(false); */

  const cryptoContext = useContext(CryptocurrenciesContext);
  const shoppingContext = useContext(ShoppingCartContext);

  const deleteHandler = () => {
    shoppingContext.deleteNft(name);
  };
  return (
    <div className={styles.container}>
      <div className={styles.nftContainer}>
        <div className={styles.imgContainer}>
          <img className={styles.snoop} src={img} alt="snoop" />
          <p className={styles.artist}>
            {artist}
            <VscVerifiedFilled size={15} color="rgb(84, 192, 231)" />
          </p>
          <p className={styles.title}>{name}</p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.favContainer}>
            <BsFillTrash3Fill
              className={styles.trash}
              color="salmon"
              onMouseOver={({ target }) => (target.style.color = "white")}
              onMouseOut={({ target }) => (target.style.color = "salmon")}
              onClick={deleteHandler}
            />

            {/* <button
              className={styles.fav}
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
            >
              {isHovering ? (
                <MdFavorite size={25} color="gold" />
              ) : (
                <MdFavoriteBorder size={25} color="gold" />
              )}
            </button> */}
          </div>
          <div className={styles.nameContainer}>
            <img
              className={styles.crypto}
              src={`images/${crypto}.png`}
              alt="eth"
            />
            <p className={styles.price}>
              {price} {crypto}
            </p>
          </div>

          <p className={styles.dollarPrice}>
            {" "}
            <img
              className={styles.priceImg}
              src={`images/${crypto}.png`}
              alt="eth"
            />{" "}
            = ${cryptoContext.cryptoPrices[crypto.toLowerCase()]}
          </p>
          <p className={styles.total}>total:${priceInDollar}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
