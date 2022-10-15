import React from 'react';
import Image from 'next/image';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {

	return (

        <div class={styles.wrapper}>

            <h2>
                Oops! Page not found.
                
            </h2>

            <div>

                <Image href="https://thumbs.dreamstime.com/b/404-error-page-not-found-design-29506876.jpg" alt="404" />

            </div>

            <h4>
                
                We can&#39t fint the page you&#39re looking for.
                
            </h4>

            <button class={styles["main-btn"]} type="button">
                
                GO BACK HOME
                
            </button>

        </div>

	);

};

export default NotFound;
