"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setCredentials((current) => ({ ...current, [name]: value }));
        setMessage("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!credentials.email || !credentials.password) {
            setMessage("Enter your email and password to continue.");
            return;
        }

        setIsSubmitting(true);
        setMessage("Login details received. Account authentication will be connected next.");
        setTimeout(() => setIsSubmitting(false), 500);
    }

    return (
        <main className="login-page">
            <section className="login-intro" aria-label="Nimal Catering Service">
                <Link className="brand-mark" href="/">
                    Nimal <span>Catering</span>
                </Link>
                <div className="intro-copy">
                    <p className="eyebrow">Welcome back</p>
                    <h1>Good food starts with good company.</h1>
                    <p>Sign in to manage your catering plans, orders, and upcoming celebrations.</p>
                </div>
                <p className="intro-footer">Thoughtfully prepared for every occasion.</p>
            </section>

            <section className="login-panel">
                <div className="login-form-wrap">
                    <div className="form-heading">
                        <p className="eyebrow">Member access</p>
                        <h2>Log in to your account</h2>
                        <p>Use the email and password connected to your Nimal Catering account.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />

                        <div className="password-label-row">
                            <label htmlFor="password">Password</label>
                            <button
                                className="text-button"
                                type="button"
                                onClick={() => setShowPassword((current) => !current)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />

                        <div className="form-options">
                            <label className="remember-option">
                                <input type="checkbox" name="remember" />
                                <span>Remember me</span>
                            </label>
                            <a href="mailto:support@nimalcatering.com?subject=Password%20reset">Forgot password?</a>
                        </div>

                        <button className="login-button" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Log in"}
                        </button>
                        <p className="form-message" role="status" aria-live="polite">
                            {message}
                        </p>
                    </form>

                    <p className="signup-prompt">
                        New to Nimal Catering? <a href="/signup">Create an account</a>
                    </p>
                </div>
            </section>
        </main>
    );
}