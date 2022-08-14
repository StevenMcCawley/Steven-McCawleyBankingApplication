const AllData = () => {
  const context = React.useContext(UserContext);
  return (
    <div className="container">
      <h2>All Data Component</h2>
      <hr />
      <h3>UserContext - </h3>
      <h4>{JSON.stringify(context)}</h4>
    </div>
  );
};
