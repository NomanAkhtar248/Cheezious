import { Trash2 } from 'lucide-react';
export default function CartSection({
  cart = [], // ✅ Safe fallback
  removeFromCart,
  updateQuantity,
  totalPrice,
}) {
  return (
    <div className="h-[350px] overflow-auto bg-gray-50 rounded-lg w-[320px] fixed top-1/3 right-10 p-4 shadow-lg">
      <h2 className="font-bold text-xl mb-4 text-center">Your Cart</h2>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2769/2769440.png"
            alt="empty cart icon"
            className="w-[35%] mx-auto mt-10 h-auto"
          />
          <h1 className="font-bold text-[16px] mt-4">YOUR CART IS EMPTY</h1>
          <p className="text-[12px] font-semibold mt-2">Go ahead and explore top categories.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm mb-3"
            >
              <div className="flex items-center w-[60%]">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-[40px] h-[40px] mr-3"
                />
                <div className="text-left">
                  <h2 className="font-medium text-sm">{product.title}</h2>
                  <p className="text-xs text-gray-500">Rs. {product.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(product.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm ml-1 cursor-pointer"
                >
                  -
                </button>
                <span className="text-sm">{product.quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-sm cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 text-sm ml-1 cursor-pointer"
              >
                 <Trash2 className='h-6 w-4' />
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4 mb-4">
            <h3 className="font-bold text-lg text-orange-600">Total: Rs. {totalPrice}</h3>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
