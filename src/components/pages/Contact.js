// import React, {useState, useEffect} from "react";
import React, {useEffect, useState} from "react";
import emailJs from "emailjs-com";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState(false);
	const [errorMsg, setErrorMsg] = useState([]);
	const [success, setSuccess] = useState("");

	useEffect(() => {
		emailJs.init("user_hxfO5whlzoN4hbuBtpvvL");
	}, []);

	function handleSubmit(e) {
		setSuccess("");
		setErrors(false);
		setErrorMsg([]);
		const errorList = [];
		let error = document.getElementById("error-msg");
		let success = document.getElementById("success-msg");
		const templateId = "template_3hz2kmk";
	
		if (name === "") {
			errorList.push(
				"Please include a name to let me know who sent the email"
			);
		}
		if (email === "") {
			errorList.push("Please include an email so I can get back to you");
		}
		if (message === "") {
			errorList.push(
				"Please include a message about why you're contacting me"
			);
		}
		if (errorList.length === 0) {
			setSuccess("Email Sent!");
			sendFeedback(templateId, {
				message: message,
				name: name,
				email: email,
			});
			success.classList.remove("fade");
			success.classList.add("error-display");
			removeErrorMsg(success);
		} else {
			setErrors(true);
			setErrorMsg(errorList);
			error.classList.remove("fade");
			error.classList.add("error-display");
			removeErrorMsg(error);
			console.log(errorMsg);
		}
	
		console.log(error.classList);
	}

	function sendFeedback(templateId, variables) {
    emailJs
      .send("service_276cc9d", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

	function removeErrorMsg(errorMsg) {
    setTimeout(function () {
      errorMsg.classList.remove("error-display");
      errorMsg.classList.add("fade");
    }, 2000);
  }

	return (
		<div className="content">
			<h3>I'd love to hear from you!</h3>
			<p>
				Send me an email with the form below if you have any questions or
				would like to inquire about my services
			</p>
			<div id="error-msg" className="error-msg fade">
				{errors.length > 0 ? errors.map((e) => <h4>{e}</h4>) : "didnt work"}
			</div>
			<div id="success-msg" className="success-msg hidden fade ">
				{success}
			</div>
			<form
				id="contact-form"
				onSubmit={(e) => handleSubmit(e)}
				method="POST"
			>
				<div className="contact-info">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email</label>
						<input
							type="email"
							className="form-control"
							aria-describedby="emailHelp"
							value={email}
							onChange={(e) => setEmail(e.value)}
						/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="message">Message</label>
					<textarea
						className="form-control"
						rows="5"
						value={message}
						onChange={(e) => setMessage(e.value)}
					/>
				</div>
				<input
					type="button"
					value="Submit"
					className="btn btn-submit"
					onClick={() => handleSubmit()}
				/>
			</form>
		</div>
	);
};

export default Contact;
