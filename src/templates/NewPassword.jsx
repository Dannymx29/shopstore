import React from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {

	return (

		<div className={styles.NewPassword}>
			
			<div className={styles["NewPassword-container"]}>

				<Image className={styles.logo} src={logo} alt="logo" />

				<h1 className={styles.title}>
					
					Create a new password
				
				</h1>

				<p className={styles.subtitle}>
					
					Enter a new passwrd for yue account
				
				</p>

				<form className={styles.form} action="/">
					
					<label className={styles.label} for="password" htmlFor='password'>
						
						Password
					
					</label>
					
					<input id="password" className={` ${styles["input"]}, ${styles["input-password"]} `} type="password" placeholder="*********" />
					
					<label className={styles.label}  for="new-password" htmlFor='new-password'>
						
						New Password
					
					</label>
					
					<input id="new-password" className={` ${styles["input"]}, ${styles["input-password"]} `} type="password" placeholder="*********" />
					
					<input className={` ${styles["primary-button"]}, ${styles["login-button"]} `} type="submit" value="Confirm" />
				
				</form>
			
			</div>
		
		</div>
	
	);

};

export default NewPassword;
