import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup} form`}>
                    <TextInput type="text" placeholder="Enter Name" icon="person" />

                    <TextInput type="email" placeholder="Enter Email" icon="contact_mail" />

                    <TextInput type="password" placeholder="Enter Password" icon="password" />

                    <TextInput type="password" placeholder="Confirm Password" icon="key" />

                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button>
                        <span>submit now</span>
                    </Button>

                    <div className="info">Already have an account? <a href="login.html">Login</a> instead.</div>

                </Form>
            </div>
        </>
    );
}