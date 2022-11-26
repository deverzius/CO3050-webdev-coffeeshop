// import { useEffect, useState } from 'react';
// import './index.css'

// function Order() {
// 	const [drink, setDrink] = useState({});
// 	const [toppings, setToppings] = useState([]);
// 	const [sizes, setSizes] = useState([]);

// 	useEffect(() => {
// 		setDrink({
// 			name: "Cafe sữa đá",
// 			price: "30",
// 			img: "image/path"
// 		});
// 		setToppings([
// 			"Kem phô mai",
// 			"Trân châu trắng",
// 			"Sốt caramel",
// 			"Thạch cafe"
// 		]);
// 		setSizes([
// 			"Nhỏ",
// 			"Vừa (+3.000đ)",
// 			"Lớn (+5.000đ)"
// 		])
// 	}, []);

// 	return (
// 		<div className='order'>
// 			<div className='container'>
// 				<div className='row'>
// 					<div className='drink-image col-sm'>
// 						<img src='https://cdn.tgdd.vn/2021/08/CookProduct/ca-phe-sua-tuoi-thumbnail-1200x676.jpg' alt='Do uong' />
// 					</div>
// 					<div className='drink-info col-sm'>
// 						<h1>{drink.name}</h1>
// 						<h2 className='drink-price'>{drink.price + ".000 đ"}</h2>
// 						<div>
// 							<div className='my-2 small-title'>Chọn size</div>
// 							<div className='d-flex'>
// 								{sizes.map((size, idx) => (
// 									<button type='button' className='btn btn-outline-success mx-2' key={idx}>
// 										{size}
// 									</button>
// 								))}
// 							</div>
// 						</div>
// 						<div className='my-3'>
// 							<div className='small-title'>Chọn Topping</div>
// 							<div className='mx-2'>
// 								{toppings.map((tping, idx) => (
// 									<button key={idx} type="btn" className='btn btn-outline-success my-2 d-block'>
// 										{tping} (+10.000đ)
// 									</button>
// 								))}
// 							</div>
// 						</div>

// 						<button type='button' className='btn btn-order btn-success w-50'>
// 							Đặt mua
// 						</button>
// 					</div>
// 				</div>

// 				<div className='row'>
// 					<hr className='primary-hr w-50 my-2' />
// 					<span className='sub-title'>Mô tả sản phẩm</span>
// 					<p className='par'>
// 						Lorem ipsum dolor sit amet,
// 						consectetur adipiscing elit,
// 						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// 						Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// 					</p>
// 				</div>

// 				<div className='row'>
// 					<hr className='primary-hr w-50 my-2' />
// 					<span className='sub-title'>Sản phẩm liên quan</span>
// 					<p className='par'>
// 						Lorem ipsum dolor sit amet,
// 						consectetur adipiscing elit,
// 						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// 						Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Order;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.css'
import { formatCurrency } from "../../ultil";
import { getProductById } from "../../api/product";
import { size, toppings } from "../../data";
import { products } from "../../data";
import { Product } from "../../components/Product";
import { ProductMini } from "../../components/ProductMini";

export const ProductPage = () => {
  const match = useParams({id: Number});
  const [product, setProduct] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);

  const [toCart, setToCart] = useState({});


  const [selectedTopping, setSelectedTopping] = useState([]);

  useEffect(() => {
    const response = getProductById(match.id);
    if (response.code === 404) {
      throw new Error(response.message);
    }
    setProduct(response.data);
  

  }, [match.id]);

  const handleSelectSize = (size) => {
    if (selectedSize) {
      if (selectedSize.name === size.name) {
        setSelectedSize(undefined);
      } else {
        setSelectedSize(size);
      }
    } else {
      setSelectedSize(size);
    }
  };

  const handleSelectTopping = (topping) => {
    console.log(checkTopping(topping))
    console.log(selectedTopping)
    if (selectedTopping.length === 0) {
      setSelectedTopping([...selectedTopping, topping]);
    }
    else {
      if (selectedTopping.find(i => i.id === topping.id)) {
        const tmp = selectedTopping.filter(i => i.id !== topping.id)
        setSelectedTopping(tmp)
      }
      else {
        setSelectedTopping([...selectedTopping, topping]);
      }
    }
  };

  const costPlus = () => {
    let cost = (product?.price || 0) +
    (selectedSize?.extraPrice || 0)
    selectedTopping.forEach(i => {
      cost += i.price
    })
    return cost * quantity
  }

  const checkTopping = (topping) => {
    let tmp = 0
    selectedTopping.forEach(i => {
      i.id === topping.id && tmp++
    })
    return tmp
  }

  const handleSub = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }
  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

  const handldeClick = () => {
    const tmp = {
      product,
      selectedSize,
      selectedTopping,
      cost: costPlus(),
      quantity
    }
  console.log(tmp)
   // add to cart
  }

  return (
    <div className="container">
      {/* <Breadcrumbs productType={product?.productType} name={product?.name} /> */}
      <div className="container__item">
        <div className="order-carousel">
          { product && <img src={product.thumbnail} alt="" /> }
        </div>
        <div className="item-deliver">
          <h4>{product?.name}</h4>
          <div className="product-price">
            <span>
              {formatCurrency(
                costPlus()
              )}
            </span>
            <p>
              {product?.discountPercent &&
                product.discountPercent.toLocaleString("en-US", {
                  style: "percent",
                  minimumFractionDigits: 0,
                })}
            </p>
          </div>

          <div className="item-size">
            <p>Kích thước</p>
            <div className="size-button">
              {size.map((size) => (
                <div>
                  <button className={`${selectedSize && selectedSize.name === size.name ? "productpade-btn__active" : "productpage-btn"}`} onClick={() => handleSelectSize(size)}>
                    {`${size.name} ${
                      size.extraPrice
                        ? "+ " + formatCurrency(size.extraPrice)
                        : ""
                    }`}
                  </button>
                </div>
              ))}
            </div>
          </div>
        
          <div className="item-topping">
            <p>Topping</p>
            <div className="topping-button">
              {toppings.map((topping) => (
                <div>
                  <button className={`${checkTopping(topping) ? "productpade-btn__active" : "productpage-btn"}`}
                   onClick={() => handleSelectTopping(topping)}>
                    {
                      topping.name + " + " + formatCurrency(topping.price)
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="quantity-handle">
            <button className="productpage-btn handle-btn" onClick={handleSub}>-</button>
            <span>{quantity}</span>
            <button className="productpage-btn handle-btn" onClick={handleAdd}>+</button>
          </div>
          {/* <button className="productpade-btn__active order-btn" onClick={handldeClick}>Thêm vào giỏ hàng</button>  */}
          <button type="button" className="productpade-btn__active order-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handldeClick}>Thêm vào giỏ hàng</button>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">BK Coffee</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Thêm thành công!
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                  <button type="button" className="btn productpade-btn__active "><a href="/cart">Tới giỏ hàng</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-100">

          </div>
        </div>
      </div>
      <div className="paragraph-container">
        <div className="information">
          <h4>Mô tả sản phẩm</h4>
          {product && product.desc}
        </div>
      </div>
      <div className="concem-same-item">
        <h4>Sản phẩm liên quan</h4>
        <div className="same-item">
          {products.slice(0, 5).map((product) => (
            <ProductMini product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
