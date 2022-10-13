import React from 'react';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
	return (

	<div class={styles.wrapper}>
        <h2>Oops! Page not found.</h2>
        <div>

            <img href="https://thumbs.dreamstime.com/b/404-error-page-not-found-design-29506876.jpg" alt="404" />

        </div>

        <h4>We can't fint the page you're looking for.</h4>

        <button type="button" class="main-btn">GO BACK HOME</button>

    </div>
	);
}

export default NotFound;
