import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const {login} = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history.push("/");
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError("Failed to creat Login!");
        }
    }

    return (
        <Form style={{height: '330px'}} onSubmit={handleSubmit}>

            <TextInput type="email" placeholder="Enter Email" icon="alternate_email" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <TextInput type="password" placeholder="Enter Password" icon="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button type="submit" disabled={loading}><span>Login</span></Button>

            {error && <p className="error">{error}</p>}

            <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
        </Form>
    );
}