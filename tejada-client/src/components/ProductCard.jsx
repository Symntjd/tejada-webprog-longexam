import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border-2 border-[#14213d] bg-white p-4 shadow-sm hover:shadow-md transition">
      
      <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-[#e6efe9] overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-[#2f6f4f] bg-white text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2f6f4f]">
            Gear
          </div>
        )}
      </div>

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c9a227]">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-[#14213d]">
        {product.title}
      </h3>

      <p className="mt-2 text-base font-bold text-[#2f6f4f]">
        {product.price}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {product.content[0].substring(0, 110)}...
      </p>

      <Button to={`/products/${product.name}`} className="mt-4" variant="blue">
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;