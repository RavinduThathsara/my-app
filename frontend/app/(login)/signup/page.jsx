"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [details, setDetails] = useState({ name: "", email: "", phone: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setDetails((current) => ({ ...current, [name]: value }));
        setMessage("");
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!details.name || !details.email || !details.phone || !details.password) {
            setMessage("Complete all fields to create your account.");
            return;
        }

        setIsSubmitting(true);
        setMessage("Your signup details have been received. Account creation will be connected next.");
        setTimeout(() => setIsSubmitting(false), 500);
    }

    return (
        <main className="login-page">
            <section className="login-intro" aria-label="Nimal Catering Service">
                <Link className="brand-mark" href="/">
                    Nimal <span>Catering</span>
                </Link>
                <div className="intro-copy">
                    <p className="eyebrow">Make it memorable</p>
                    <h1>Gather well. Celebrate fully.</h1>
                    <p>Create an account to plan your next catering experience with Nimal Catering.</p>
                </div>
                <p className="intro-footer">Thoughtfully prepared for every occasion.</p>
            </section>

            <section className="login-panel">
                <div className="login-form-wrap">
                    <div className="form-heading">
                        <p className="eyebrow">New member</p>
                        <h2>Create your account</h2>
                        <p>Save your details and make planning your next occasion easier.</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="name">Full name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                            value={details.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={details.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="phone">Phone number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="07X XXX XXXX"
                            value={details.phone}
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
                            autoComplete="new-password"
                            placeholder="Create a password"
                            value={details.password}
                            onChange={handleChange}
                            required
                        />

                        <button className="login-button" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Creating account..." : "Create account"}
                        </button>
                        <p className="form-message" role="status" aria-live="polite">
                            {message}
                        </p>
                    </form>

                    <p className="signup-prompt">
                        Already have an account? <Link href="/login">Log in</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
