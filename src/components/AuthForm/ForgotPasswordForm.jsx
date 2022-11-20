import { InputForm } from 'components/Input';
import { ErrorMessage, Form, Formik } from 'formik';
import scss from './AuthForm.module.scss';
import Button from 'components/Button';
import { useState } from 'react';
// import { useLogInMutation } from 'redux/fetchUser';
import { Link } from 'react-router-dom';
import { emailValidationSchema } from 'services';

const initialValues = {
	email: '',
};

export const ForgotPasswordForm = props => {
	// const [forgotPassword] = use...Mutation(); виклик хуку мутаціі з rtk query
	// const [isError, setIsError] = useState(null);
	const [isSuccess, setIsSuccess] = useState(false);


	const handleSubmit = async (formData, { resetForm }) => {
		console.log(formData);
		setIsSuccess(true);
		// const { error } = await forgotPassword(formData);
		// if (error) {
		// 	setIsError({
		// 		message: error.data.message,
		// 		additionalInfo: error.data.additionalInfo,
		// 	});
		// 	resetForm();
		// } else {
		//	setIsSucces(true);
		// }
	};

	return (
		<div className={scss.container}>
			<Formik
				validationSchema={emailValidationSchema}
				initialValues={initialValues}
				onSubmit={handleSubmit}
			>
				{() => (
					<Form className={scss.form}>
						{ !isSuccess ? (
						<>
						<h2 className={scss.title}>{props.title}</h2>
						<div className={scss.input__wrapper}>
							<InputForm
								autofocus="autofocus"
								name="email"
								type="email"
								placeholder="Email"
								autoComplete="off"
							/>
							<ErrorMessage
								name="email"
								component="p"
								className={scss.error}
							/>
						</div>


						<div className={scss.button__container}>
							<Button
								type="submit"
								className={scss.button__auth}
								buttonName="Confirm"
							></Button>
						</div>

						{/* {isError && (
							<p className={scss.error__login}>
								{isError.message}
							</p>
						)}
						{isError && (
							<p className={scss.error__login}>
								{isError.additionalInfo}
							</p>
						)} */}
						</>) : (<h2 className={scss.title}> Your password change notification has been sent.</h2>)}
						
						<p className={scss.redirect__auth}>
							Don't have an account?
							<Link
								to="/register"
								className={scss.redirect_link__auth}
							>
								Register
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</div>
	);
};
