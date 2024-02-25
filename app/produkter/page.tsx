import Navbar from "@/components/navbar";
import Image from "next/image";

const products = [
  {
    src: "/art.svg",
    name: "Blå damen",
    price: "2 000",
  },
  {
    src: "/art.svg",
    name: "Blå damen",
    price: "2 000",
  },
  {
    src: "/art.svg",
    name: "Blå damen",
    price: "2 000",
  },
  {
    src: "/art.svg",
    name: "Blå damen",
    price: "2 000",
  },
];

const ProductsPage = () => {
  return (
    <>
    <Navbar />
      {/* PRODUCT LIST */}
      <div className="my-20 max-w-screen-lg mx-auto">
        <div className="text-center text-neutral-500 mb-10">All konst</div>

        <div className="w-full grid grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.name}>
              {/* PRODUCT */}
              <Image
                src={product.src}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover w-full h-[450px]"
              />
              <div className="flex justify-between text-neutral-500 mt-2">
                <div>{product.name}</div>
                <div className="flex flex-col items-end">
                  <div>{product.price} :-</div>
                  <div className="text-xs">Exkl. leveransavgift</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
