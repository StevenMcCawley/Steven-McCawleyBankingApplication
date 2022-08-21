const CreateAccount = () => {
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      alert(`${label} cannot be blank`)
      return false;
    }
    if (label === 'password' && password.length < 8) {
      alert(`password cannot be less than 8 characters`)
      return false;
    }
    return true;
  };

  const handleCreate = () => {
    console.log("name: ", name, "email: ", email, "password: ", password);
    if (
      !validate(name, "name") ||
      !validate(email, "email") ||
      !validate(password, "password")
      ) {
      return;
    }
    console.log(context);
    context.users.push({ name, email, password, balance: 100 });
    setShow(false);
  };

  const clearForm = () => {
    setShow(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container my-3">
      <Card
        header="Create an account here"
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email Address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                type="sumbit"
                className="btn btn-primary"
                onClick={handleCreate}
                disabled = {!name && !email && !password}
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
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )
        }
      />
    </div>
  );
};
