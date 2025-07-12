import useSignUp from "./SingUp.logic";

const SignUp = () => {
    const { onSubmit, error } = useSignUp();
    return (
             <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="text-2xl font-bold mb-4 text-violet-500 flex justify-center">
                    Sign Up
                </div>
                 <div className="mb-2">
                    <label htmlFor="email" className="label">
                        Username
                    </label>
                    <input
                        type="string"
                        id="username"
                        className="input"
                        name="username"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                 <div className="mb-2">
                    <label htmlFor="email" className="label">
                        First Name
                    </label>
                    <input
                        type="string"
                        id="first-anem"
                        className="input"
                        name="first_name"
                        placeholder="Enter your first name"
                        required
                    />
                </div>
                 <div className="mb-2">
                    <label htmlFor="email" className="label">
                        Last Name
                    </label>
                    <input
                        type="string"
                        id="last-name"
                        className="input"
                        name="last_name"
                        placeholder="Enter your last name"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                 <div className="mb-2">
                    <label htmlFor="email" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        className="input"
                        name="password_confirmation"
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="button"
                >
                    Login
                </button>
                 {error && <span className="text-red-500 mt-4">{error}</span>}
                
            </form>
            )
}

export default SignUp;