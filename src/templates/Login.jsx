import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';

const Login = () => {

	const form = useRef(null);

	const handleSubmit = (event) => {

		event.preventDefault();

		const formData = new FormData(form.current);

		const data = {

			usename: formData.get('email'),

			password: formData.get('password')

		}

		console.log(data);

	}

	return (

		<div className={styles.Login}>

			<div className={styles["Login-container"]}>

				<img className={styles.logo} src={logo} alt="logo" />

				<form className={styles.form} action="/" ref={form}>

					<label className={styles.label} htmlFor="email">
						
						Email address
					
					</label>

					<input className={` ${styles["input"]}, ${styles["input-email"]} `} type="text" name="email" placeholder="platzi@example.com" />
					
					<label className={styles.label} htmlFor="password">
						
						Password
					
					</label>

					<input className={` ${styles["input"]}, ${styles["input-password"]} `} type="password" name="password" placeholder="*********" />
					
					<button className={` ${styles["primary-button"]}, ${styles["login-button"]} `} onClick={handleSubmit}>

						Log in

					</button>

					<a href="/">
						
						Forgot my password
					
					</a>

				</form>

				<button className={` ${styles["secondary-button"]}, ${styles["signup-button"]} `}>

					Sign up

				</button>

			</div>

		</div >

	);

}

export default Login;
