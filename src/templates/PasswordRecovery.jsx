import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {

	return (

		<div className={styles.PasswordRecovery}>

			<div className={styles["PasswordRecovery-container"]}>

				<img className={styles.logo} src={logo} alt="logo" />

				<h1 className={styles.title}>
					
					Password recovery
					
				</h1>

				<p className={styles.subtitle}>
					
					Inform the email address used to create your account
				
				</p>

				<form className={styles.form} action="/">

					<label className={styles.label} htmlFor="email">
						
						Email address
						
					</label>

					<input id="email" className={` ${styles["input"]}, ${styles["input-email"]} `} type="text" />

					<input className={` ${styles["primary-button"]}, ${styles["login-button"]} `} type="submit" value="Confirm" />

				</form>

			</div>

		</div>

	);
	
}

export default PasswordRecovery;
