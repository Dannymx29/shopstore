import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {

	return (

		<div className={styles.MyAccount}>

			<div className={styles["MyAccount-container"]}>

				<h1 className={styles.title}>
					
					My account
				
				</h1>

				<form className={styles.form} action="/">

					<div>

						<label className={styles.label} for="name" htmlFor='MA-name'>
							
							Name
						
						</label>

						<p id='MA-name' className={styles.value} placeholder='Ejemplo: Camila Yokoo' ></p>

						<label className={styles.label} for="email" htmlFor='MA-email'>
							
							Email
						
						</label>

						<p id='MA-email' className={styles.value} placeholder='Ejemplo: amilayokoo@gmail.com' ></p>

						<label className={styles.label} for="password" htmlFor='MA-password'>
							
							Password
						
						</label>

						<p id='MA-password' className={styles.value} placeholder='*********' ></p>

					</div>

					<input className={` ${styles["secondary-button"]}, ${styles["login-button"]} `} type="submit" value="Edit" />

				</form>

			</div>

		</div>

	);

};

export default MyAccount;
