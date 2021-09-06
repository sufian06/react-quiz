import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration />
                <Form className={classes.login}>

                    <TextInput type="email" placeholder="Enter Email" icon="alternate_email" />

                    <TextInput type="password" placeholder="Enter Password" icon="password" />

                    <Button>Login</Button>

                    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </>
    );
}