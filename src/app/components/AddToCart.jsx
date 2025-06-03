export default function AddToCart({ product, addToCart }) {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => addToCart(product)}  // Only add to cart
        className="text-center w-[100%] mt-2 pt-3 pb-3 bg-white rounded-xl hover:bg-orange-600 hover:text-white text-[14px] tracking-wider font-semibold hover:cursor-pointer"
      >
        + Add to Cart
      </button>
    </div>
  );
}
