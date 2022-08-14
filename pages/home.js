const Home = () => {
  return (
    <div className="container">
      <h2>Home Component</h2>
      <Card
        header="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank"
        body={(<img src="./resources/bank.png" className="img-fluid" alt="Bank Logo" />)}
      />
    </div>
  );
};
