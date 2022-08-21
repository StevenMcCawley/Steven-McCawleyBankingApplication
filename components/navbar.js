const Navbar = () => {
  const setPageCurrent = (e) => {
    e.nativeEvent.path
      .filter((el) => el.id === "navbarSupportedContent")[0]
      .querySelectorAll(".nav-link")
      .forEach((element) => {
        element.classList.remove("active");
        element.removeAttribute("aria-current");
      });
      e.target.classList.add("active");
      e.target.setAttribute("aria-current", "page");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pb-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-1 active" href="#" aria-current="page" onClick={setPageCurrent}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-1"
                  href="#/pages/deposit"
                  onClick={setPageCurrent}
                >
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-1"
                  href="#/pages/withdraw"
                  onClick={setPageCurrent}
                >
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-1"
                  href="#/pages/allData"
                  onClick={setPageCurrent}
                >
                  All Data
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link mx-1"
                  href="#/pages/createAccount"
                  onClick={setPageCurrent}
                >
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
