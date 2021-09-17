import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {signup} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        // do validation

        if(password !== confirmPassword) {
            return setError("Password don't match!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history.push("/");
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError("Failed to creat an account!");
        }
    }


    return (
        <Form style={{height: "500px"}} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter Name" icon="person" required value={username} onChange={(e) => setUsername(e.target.value)} />

            <TextInput type="email" required placeholder="Enter Email" icon="contact_mail" value={email} onChange={(e) => setEmail(e.target.value)} />

            <TextInput type="password" required placeholder="Enter Password" icon="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <TextInput type="password" required placeholder="Confirm Password" icon="key" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <Checkbox text="I agree to the Terms &amp; Conditions" required value={agree} onChange={(e) => setAgree(e.target.value)} />

            <Button disabled={loading} type="submit">
                <span>submit now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">Already have an account? <Link to="/login">Login</Link> instead.</div>

        </Form>
    );
}
