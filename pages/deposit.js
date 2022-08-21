const Deposit = () => {
  const [show, setShow] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  const context = React.useContext(UserContext);

  const validate = (field, label) => {
    if (!field) {
      alert(`${label} cannot be blank, must contain only digits, and must not be negative`)
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setShow(true);
    setAmount(0);
  };

  const handleDeposit = () => {
    if (!validate(amount, "amount")) return;
    try {
      const b1 = parseInt(context.users[0].balance);
      console.log("prev user balance:", b1);
      const b2 = parseInt(amount);
      console.log("amount to deposit:", b2);
      context.users[0].balance = b1+b2;
      setShow(false);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <div className="container my-3">
      {context.users[0] ? (
        <Card
          header="Deposit cash"
          body={
            show ? (
              <>
                <h5>
                  Current Balance:{" "}
                  {context.users ? context.users[0].balance : 0}
                </h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="deposit">Deposit amount</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="deposit"
                        placeholder="100"
                        min="0"
                        value={amount}
                        onChange={(e) => setAmount(e.currentTarget.value)}
                      ></input>
                    </div>
                  </div>
                  <button
                    type="sumbit"
                    className="btn btn-primary mt-3"
                    onClick={handleDeposit}
                    disabled={!amount && amount === 0}
                  >
                    Deposit
                  </button>
                </form>
              </>
            ) : (
              <>
                <h5>Success</h5>
                <button
                  type="sumbit"
                  className="btn btn-primary"
                  onClick={clearForm}
                >
                  Back to deposit
                </button>
              </>
            )
          }
        />
      ) : (
        <Card
          header="No users exist"
          body={<a href="#/pages/createAccount">Create an account</a>}
        />
      )}
    </div>
  );
};
