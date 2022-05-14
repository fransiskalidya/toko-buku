import React from "react";
import { render } from "react-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Checkout.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/frontend/auth/Navbar";


const Checkout = () => {
	return (
		<div style={{ marginTop: '90px' }}>
                <Navbar />
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-col-12">
						<div className="d-flex flex-row my-md-4">
							<div className="judul">
								<h1>BookTown</h1>
							</div>
							<form>
								<div className="my-md-2">
									<div className="box">
										<div className="input-group">
											<input type="text" className="form-control" placeholder="Search Products Here....." aria-label="Recipient's username" aria-describedby="basic-addon4" />
											<button className="btn btn-warning" id="btnNavbarSearch" type="button">Search</button>
										</div>
									</div>
								</div>
							</form>
							<div className="d-flex flex-row my-md-2">
								<div className="my-md-2">
									<div className="font-heart">
										<a href="#" className="single-icon"><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<div className="d-flex flex-row my-md-2">
								<div className="my-md-2">
									<div className="font-user">
										<a href="#" className="single-icon"><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
							<div className="d-flex flex-row my-md-2">
								<div className="my-md-2">
									<div className="font-user">
										<a href="#" className="single-icon"><i className="fa fa-shopping-bag fa-lg" aria-hidden="true"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="header">
						<h1></h1>
					</div>
					<div className="header1">
						<h1></h1>
					</div>
				</div>
				<div className="col-lg-2 col-md-col-12">
					<div className="d-flex flex-row my-md-3">
						<div className="bread-inner">
							<Link className="nav-link" to="/">Home</Link>
						</div>
						<div className="my-md-2">
							<div className="arrow"></div>
							<i className="fa fa-arrow-right fa lg"></i>
						</div>
						<div className="my-md-0">
							<div className="bread-inner">
								<Link className="nav-link" to="/checkout">Checkout</Link>
							</div>
						</div>
					</div>
				</div>
				<section className="shop checkout section">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-12">
								<div className="checkout-form">
									<div className="text-main">
										<b><h2>Silahkan Checkout Di Sini !</h2></b>
									</div>
									<p>Mohon untuk melengkapi data berikut dengan benar</p>
									<br></br>
									<br></br>
								</div>
							</div>
						</div>
					</div>
				</section>

				<form>
					<div className="row">
						<div className="col-75">
							<div className="container">

								<div className="row">
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="nama_lengkap"><i className="fa fa-user"></i>  Nama Lengkap</label>
										</div>
										<input className="form-control" id="nama_lengkap" name="nama_lengkap" placeholder="Nama Lengkap" />
									</div>
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="nama_panggilan"><i className="fa fa-user"></i>  Nama Panggilan</label>
										</div>
										<input className="form-control" id="nama_panggilan" name="nama_panggilan" placeholder="Nama Panggilan" />
									</div>
								</div>
								<br></br>

								<div className="row">
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i>  Email</label>
										</div>
										<input className="form-control" id="email" name="email" placeholder="Email" />
									</div>
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="nomor_telepon"><i className="fa fa-mobile fa-lg" aria-hidden="true"></i>  Nomor Telepon</label>
										</div>
										<input className="form-control" id="nomor_telepon" name="nomor_telepon" placeholder="Nomor Telepon" />
									</div>
								</div>
								<br></br>

								<div className="row">
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="alamat"><i className="fa fa-map-marker" aria-hidden="true"></i>  Alamat Lengkap</label>
										</div>
										<input className="form-control" id="alamat" name="alamat" placeholder="Alamat Lengkap" />
									</div>
									<div className="form-group col-md-6">
										<div className="column-name">
											<label htmlFor="kode_pos"><i className="fa fa-building" aria-hidden="true"></i>  Kode Pos</label>
										</div>
										<input className="form-control" id="kode_pos" name="kode_pos" placeholder="Kode Pos" />
										<br></br>
									</div>
									<label>
										<input type="checkbox" name="konfirmasi" /> Saya yakin alamat pengiriman di atas sudah sesuai
										<br></br><br></br></label>
									<button className="btn btn-warning" id="btnNavbarSearch" type="button"><b>Checkout</b></button>
								</div>
							</div>
						</div>
					</div>
					<form>
						<div className="row">
							<div className="col-25">
								<div className="container">
									<h2 className="title">CART  TOTALS
										<span className="price">
											< i className="fa fa-shopping-cart"></i>
										</span>
									</h2>
									<br></br>
									<br></br>

									<div class="row">
										<div className="col-lg-2 col-md-col-12">
											<div className="d-flex flex-row my-md-3">
												<div class="col-50">
													<h2 className="title2">Total Belanja </h2>
													<br></br>
													<h2 className="title3">Biaya Pengiriman </h2>
												</div>
												<div class="row">
													<div class="col-50">
														<div className="my-md-0"></div>
														<h2 className="title-sub"> Rp. 500.000,00</h2>
														<br></br>
														<h2 className="title-sub1">Rp. 20.000,00</h2>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>


							</div>
						</div>


					</form>

					<form>
						<div className="row">
							<div className="col-25">
								<div className="container">
									<div class="row">
										<div className="col-lg-2 col-md-col-12">
											<div className="d-flex flex-row my-md-5">
												<div class="col-50">
													<h2 className="title4">Total Keseluruhan </h2>
												</div>

												<div class="row">
													<div class="col-50">
														<div className="my-md-0"></div>
														<h2 className="title-sub2">Rp. 520.000,00</h2>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class="single-widget">
										<h2 className="single">Payments</h2>
										<br></br>
										<div className="content"></div>
										<div className="checkbox">
											<label className="checkbox-inline1" for="1"><input name="updates" id="1" type="checkbox" /> Check Payments</label><br></br>
											<label className="checkbox-inline2" for="2"><input name="news" id="2" type="checkbox" /> Cash On Delivery</label><br></br>
											<label className="checkbox-inline3" for="3"><input name="news" id="3" type="checkbox" /> PayPal</label>
										</div>
									</div>

									<br></br>
									<div className="row">
										<div className="form-group col-md-1">
											<div className="icon-container1">
												<i className="fa fa-cc-visa fa-lg" aria-hidden="true"></i>
											</div>
										</div>

										<div className="form-group col-md-1">
											<div className="icon-container2">
												<i className="fa fa-cc-amex fa-lg" aria-hidden="true"></i>
											</div>
										</div>

										<div className="form-group col-md-1">
											<div className="icon-container3">
												<i className="fa fa-cc-mastercard fa-lg" aria-hidden="true"></i>
											</div>
										</div>

										<div className="form-group col-md-1">
											<div className="icon-container4">
												<i className="fa fa-cc-discover fa-lg" aria-hidden="true"></i>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</form>
			</div>
		</div >
		</div>
	)
}
export default Checkout;