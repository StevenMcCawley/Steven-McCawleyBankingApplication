const AllData = () => {
  const context = React.useContext(UserContext);

  const userClicked = () => {
    console.log("hello");
  };

  return (
    <div className="container d-flex my-3">
      {context.users.map((user, i) => {
        return (
          <div className="mx-3" onClick={userClicked()}>
            <Card
              header={user.name}
              body={
                <>
                  <h5>
                    <span>
                      <b>Email:</b>
                    </span>{" "}
                    {user.email}
                  </h5>
                  <h5>
                    <span>
                      <b>Password:</b>
                    </span>{" "}
                    {user.password}
                  </h5>
                  <h5>
                    <span>
                      <b>Balance:</b>
                    </span>{" "}
                    ${user.balance}
                  </h5>
                </>
              }
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
};
