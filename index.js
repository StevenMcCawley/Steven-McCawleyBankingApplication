const Spa = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/pages/allData" component={AllData} />
          <Route path="/pages/balance" component={Balance} />
          <Route path="/pages/createAccount" component={CreateAccount} />
          <Route path="/pages/deposit" component={Deposit} />
          <Route path="/pages/login" component={Login} />
          <Route path="/pages/withdraw" component={Withdraw} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
};

ReactDOM.render(<Spa />, document.querySelector("#root"));
