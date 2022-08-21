const Home = () => {
  return (
    <div className="container my-3">
      <Card
        header="BadBank Landing Page"
        title="Welcome to the Bad Bank"
        text="You can use this bank"
        body={
          <img
            src="./resources/bank.png"
            className="img-fluid"
            alt="Bank Logo"
          />
        }
      />
    </div>
  );
};
