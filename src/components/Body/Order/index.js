import { useEffect, useState } from 'react';
import './index.css'

function Order() {
	const [drink, setDrink] = useState({});
	const [toppings, setToppings] = useState([]);
	const [sizes, setSizes] = useState([]);

	useEffect(() => {
		setDrink({
			name: "Cafe sữa đá",
			price: "30",
			img: "image/path"
		});
		setToppings([
			"Kem phô mai",
			"Trân châu trắng",
			"Sốt caramel",
			"Thạch cafe"
		]);
		setSizes([
			"Nhỏ",
			"Vừa (+3.000đ)",
			"Lớn (+5.000đ)"
		])
	}, []);

	return (
		<div className='order'>
			<div className='container'>
				<div className='row'>
					<div className='drink-image col-sm'>
						<img src='https://cdn.tgdd.vn/2021/08/CookProduct/ca-phe-sua-tuoi-thumbnail-1200x676.jpg' alt='Do uong' />
					</div>
					<div className='drink-info col-sm'>
						<h1>{drink.name}</h1>
						<h2 className='drink-price'>{drink.price + ".000 đ"}</h2>
						<div>
							<div className='my-2 small-title'>Chọn size</div>
							<div className='d-flex'>
								{sizes.map((size, idx) => (
									<button type='button' className='btn btn-outline-success mx-2' key={idx}>
										{size}
									</button>
								))}
							</div>
						</div>
						<div className='my-3'>
							<div className='small-title'>Chọn Topping</div>
							<div className='mx-2'>
								{toppings.map((tping, idx) => (
									<button key={idx} type="btn" className='btn btn-outline-success my-2 d-block'>
										{tping} (+10.000đ)
									</button>
								))}
							</div>
						</div>

						<button type='button' className='btn btn-order btn-success w-50'>
							Đặt mua
						</button>
					</div>
				</div>

				<div className='row'>
					<hr className='primary-hr w-50 my-2' />
					<span className='sub-title'>Mô tả sản phẩm</span>
					<p className='par'>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>

				<div className='row'>
					<hr className='primary-hr w-50 my-2' />
					<span className='sub-title'>Sản phẩm liên quan</span>
					<p className='par'>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Order;