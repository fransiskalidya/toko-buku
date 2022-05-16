import React from "react";

const Dashboard = () => {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();
    let dt = currentDate.toDateString();
    return (
        <div>
            <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-4">
                        <span>
                            <li class="breadcrumb-item active">Welcome back, your Dashboard is ready!</li>
                            <div class="card border-secondary mb-3">
                                <div class="card-header">{dt} - {currentTime}</div>
                            </div>
                        </span>
                    </ol>
                    {/* <div class="card text-white bg-dark" style={{marginBottom: "30px"}}>
                        <div class="card-body">
                            <h5 class="card-title"><b>Hello</b></h5>
                            <p class="card-text">welcome back, your Dashboard is ready!</p>
                        </div>
                    </div> */}
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card border-secondary mb-3">
                                <div class="card-header">Jumlah User</div>
                                <div class="card-body text-secondary">
                                    <h3 class="card-title">14</h3>
                                    <p class="card-text">Perhitungan dilakukan per hari ini</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="card border-secondary mb-3">
                                <div class="card-header">pendapatan bulan ini</div>
                                <div class="card-body text-secondary">
                                    <h3 class="card-title">Rp. 13.000.000</h3>
                                    <p class="card-text">Perhitungan dilakukan per hari ini</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card border-danger mb-3">
                                <div class="card-header">Pesanan Tertunda</div>
                                <div class="card-body text-secondary">
                                    <h3 class="card-title">1</h3>
                                    <p class="card-text">Perhitungan dilakukan per hari ini</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-xl-3 col-md-6">
                            <div class="card bg-danger text-white mb-4">
                                <div class="card-body">Danger Card</div>
                                <div class="card-footer d-flex align-items-center justify-content-between">
                                    <a class="small text-white stretched-link" href="#">View Details</a>
                                    <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div class="row">
                        <div class="col-xl-6">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-chart-area me-1"></i>
                                    Area Chart Example
                                </div>
                                <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <i class="fas fa-chart-bar me-1"></i>
                                    Bar Chart Example
                                </div>
                                <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>

        </div>
    )
}

export default Dashboard;