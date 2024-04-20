import React from 'react';
import SidebarToggle from './assets/js/scripts';
import AreaChart from './assets/demo/chart-area-demo';
import BarChart from './assets/demo/chart-bar-demo';
import PieChart from './assets/demo/chart-pie-demo';
import {BootstrapNavbar, BootstrapSidenav} from './Navbar'
class Charts extends React.Component {

    render() {
        return (
            <div className="sb-nav-fixed">
                <SidebarToggle />
                <BootstrapNavbar />
                <div id="layoutSidenav">
                <BootstrapSidenav />
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Charts</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item"><a href="./">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Charts</li>
                                </ol>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        Chart.js is a third party plugin that is used to generate the charts in this template. The charts below have been customized - for further customization options, please visit the official
                                        <a target="_blank" href="https://www.chartjs.org/docs/latest/">Chart.js documentation</a>
                                        .
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body"><AreaChart width="100%" height="50"/></div>
                                    <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-bar me-1"></i>
                                                Bar Chart Example
                                            </div>
                                            <div className="card-body"><BarChart width="100%" height="50" /></div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card mb-4">
                                            <div className="card-header">
                                                <i className="fas fa-chart-pie me-1"></i>
                                                Pie Chart Example
                                            </div>
                                            <div className="card-body"><PieChart width="100%" height="50" /></div>
                                            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Charts;
