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

						<label className={styles.label} for="name">
							
							Name
						
						</label>

						<p className={styles.value}>
							
							Camila Yokoo
						
						</p>

						<label className={styles.label} for="email">
							
							Email
						
						</label>

						<p className={styles.value}>
							
							amilayokoo@gmail.com
						
						</p>

						<label className={styles.label} for="password">
							
							Password
						
						</label>

						<p className={styles.value}>
							
							*********
						
						</p>

					</div>

					<input className={` ${styles["secondary-button"]}, ${styles["login-button"]} `} type="submit" value="Edit" />

				</form>

			</div>

		</div>

	);

}

export default MyAccount;
