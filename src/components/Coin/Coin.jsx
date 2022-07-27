import React from 'react';
import styles from "./Coin.module.css";

const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {
    return <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.coin}>
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className={styles.symbol}>{symbol}</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.price}>₽{price.toLocaleString()}</p>
                    <p className={styles.volume}>₽{volume.toLocaleString()}</p>

                    {priceChange<0 ? (
                        <p className={`${styles.percent} ${styles.red}`}>{priceChange}%</p>
                    ):(
                        <p className={`${styles.percent} ${styles.green}`}>{priceChange}% </p>
                    )}
                    <p className={styles.marketCap}>₽ {marketcap}</p>
                </div>
            </div>
    </div>;
}

export default Coin;