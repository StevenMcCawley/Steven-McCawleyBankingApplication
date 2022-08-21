const setCurrentPage = (page) => {
  
}

const Spa = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "joe",
                email: "schmoe.com",
                password: "joeSchmoe",
                balance: "100",
              }
            ],
          }}
        >
          <Route path="/" exact component={Home} />
          <Route path="/pages/deposit" component={Deposit} />
          <Route path="/pages/withdraw" component={Withdraw} />
          <Route path="/pages/allData" component={AllData} />
          <Route path="/pages/createAccount" component={CreateAccount} />
        </UserContext.Provider>
      </HashRouter>
    </>
  );
};

ReactDOM.render(<Spa />, document.querySelector("#root"));
