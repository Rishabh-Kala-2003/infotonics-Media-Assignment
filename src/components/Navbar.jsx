import React from 'react';
import './assets/js/scripts';
const BootstrapNavbar = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="/">Start Bootstrap</a>
      <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
        <i className="fas fa-bars"></i>
      </button>
      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
          <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
        </div>
      </form>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#!">Settings</a></li>
            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#!">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

const BootstrapSidenav = () => {
  return (
    <nav id="layoutSidenav_nav">
      <div className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <a className="nav-link" href="./">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
              Dashboard
            </a>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
              <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
              Layouts
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link" href="./layout-static">Static Navigation</a>
                <a className="nav-link" href="./layout-sidenav-light">Light Sidenav</a>
              </nav>
            </div>
            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
              <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
              Pages
              <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
            </a>
            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
              <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                  Authentication
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="./login">Login</a>
                    <a className="nav-link" href="./register">Register</a>
                    <a className="nav-link" href="./password">Forgot Password</a>
                  </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                  Error
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                  <nav className="sb-sidenav-menu-nested nav">
                    <a className="nav-link" href="./401">401 Page</a>
                    <a className="nav-link" href="./404">404 Page</a>
                    <a className="nav-link" href="./500">500 Page</a>
                  </nav>
                </div>
              </nav>
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <a className="nav-link" href="./charts">
              <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
              Charts
            </a>
            <a className="nav-link" href="./tables">
              <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
              Tables
            </a>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </div>
    </nav>
  );
}

export { BootstrapNavbar, BootstrapSidenav };
