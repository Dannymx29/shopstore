import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {

	return (

		<div className={styles.CreateAccount}>

			<div className={styles["CreateAccount-container"]}>

				<h1 className={styles.title}>
					
					My account
				
				</h1>

				<form className={styles.form} action="/">

					<div>

						<label className={styles.label} htmlFor='name'>
							
							Name
						
						</label>

						<input id="name" className={` ${styles["input"]}, ${styles["input-name"]} `} type="text" placeholder="Teff" />
						
						<label className={styles.label} htmlFor='email'>
							
							Email
						
						</label>
						
						<input id="email" className={` ${styles["input"]}, ${styles["input-email"]} `} type="text" placeholder="platzi@example.com" />
						
						<label className={styles.label} htmlFor="password">
							
							Password
						
						</label>
						
						<input id="password" className={` ${styles["input"]}, ${styles["input-password"]} `} type="password" placeholder="*********" />
					
					</div>

					<input className={` ${styles["primary-button"]}, ${styles["login-button"]} `} type="submit" value="Create" />
				
				</form>

			</div>

		</div>

	);

};

export default CreateAccount;
