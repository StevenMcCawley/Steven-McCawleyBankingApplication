const CreateAccount = () => {
  const [showCreate, setShowCreate] = React.useState(true);
  const [createName, setCreateName] = React.useState("");
  const [createEmail, setCreateEmail] = React.useState("");
  const [createPassword, setCreatePassword] = React.useState("");

  const [showLogin, setShowLogin] = React.useState(true);
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");

  const context = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      alert(`${label} cannot be blank`);
      return false;
    }
    if (
      (label === "createPassword" && createPassword.length < 8) ||
      (label === "loginPassword" && loginPassword.length < 8)
    ) {
      alert(`password cannot be less than 8 characters`);
      return false;
    }
    return true;
  };

  const handleCreate = () => {
    console.log(
      "createName: ",
      createName,
      "createEmail: ",
      createEmail,
      "createPassword: ",
      createPassword
    );
    if (
      !validate(createName, "createName") ||
      !validate(createEmail, "createEmail") ||
      !validate(createPassword, "createPassword")
    ) {
      return;
    }
    console.log(context);
    context.users.push({
      name: createName,
      email: createEmail,
      password: createPassword,
      balance: 100,
    });
    var user = context.users.find((element) => element.email == createEmail ?? "");
    context.currentUser = user;
    setShowCreate(false);
    setShowLogin(false);
  };

  const handleLogin = () => {
    console.log("email: ", loginEmail, "password: ", loginPassword);
    if (
      !validate(loginEmail, "email") ||
      !validate(loginPassword, "password")
    ) {
      return;
    }
    console.log(context);
    var user = context.users.find((element) => element.email == loginEmail ?? "");
    if (user) {
      context.currentUser = user;
    } else {
      return;
    }
    setShowLogin(false);
  };

  const clearCreateForm = () => {
    setShowCreate(true);
    setCreateName("");
    setCreateEmail("");
    setCreatePassword("");
  };

  const clearLoginForm = () => {
    setShowLogin(true);
    setLoginEmail("");
    setLoginPassword("");
    context.currentUser = null;
  };

  return (
    <div className="container d-flex">
      <div className="container-fluid my-3">
        <Card
          header="Create an account here"
          body={
            showCreate ? (
              <>
                Name
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="CreateName"
                  placeholder="Enter name"
                  value={createName}
                  onChange={(e) => setCreateName(e.currentTarget.value)}
                />
                <br />
                Email Address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="createEmail"
                  placeholder="Enter email address"
                  value={createEmail}
                  onChange={(e) => setCreateEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="createPassword"
                  placeholder="Enter your password"
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="sumbit"
                  className="btn btn-primary"
                  onClick={handleCreate}
                  disabled={!createName && !createEmail && !createPassword}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <h5>Success</h5>
                <button
                  type="sumbit"
                  className="btn btn-primary"
                  onClick={clearCreateForm}
                >
                  Add another account
                </button>
              </>
            )
          }
        />
      </div>
      <div className="container-fluid my-3">
        <Card
          header="Login here"
          body={
            (context?.currentUser == null) ? (
              <>
                Email Address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="loginEmail"
                  placeholder="Enter email address"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="loginPassword"
                  placeholder="Enter your password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="sumbit"
                  className="btn btn-primary"
                  onClick={handleLogin}
                  disabled={!loginEmail && !loginPassword}
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <h5>Logged in as:</h5>
                <h5><b>{context?.currentUser.email}</b></h5>
                <button
                  type="sumbit"
                  className="btn btn-primary"
                  onClick={clearLoginForm}
                >
                  Logout
                </button>
              </>
            )
          }
        />
      </div>
    </div>
  );
};
