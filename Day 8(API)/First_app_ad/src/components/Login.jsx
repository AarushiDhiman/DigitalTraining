function Login() {
    return (
        <div>
            <h3 className="text-center p-2 text-bg-secondary">Login Page</h3>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com"/>
            </div>
            <div className="row g-3 align-items-center">
                <div className="col">
                    <label for="inputPassword6" className="col-form-label">Password</label>
                </div>
                <div className="col">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline"/>
                </div>
                <div className="col">
                    <span id="passwordHelpInline" className="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
            </div>
            <button className="btn btn-primary mt-3 w-100">Login</button>
        </div>

    );
}

export default Login;