// "Use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"

// const Menu = () => {


//     const [open,setOpen] = useState(false)


//     return (
//         <div className="">
//             <Image src="/menu.png" alt=""
//              width={28} height={28}
//              className="cursor-pointer"
//              onClick={() =>
//              setOpen((prev) => !prev)}
//             />
//             {
//                 open && (
//                     <div className="">
//                         <Link href="/">Homepage</Link>
//                         <Link href="/">Shop</Link>
//                         <Link href="/">Deals</Link>
//                         <Link href="/">About</Link>
//                         <Link href="/">Contact</Link>
//                         <Link href="/">Logout</Link>
//                         <Link href="/">Cart(1)</Link>
//                         <Link href="/"></Link>
//                         <Link href="/"></Link>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default Menu




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Menu = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="flex justify-end">
//             <Image 
//                 src="/menu.png" 
//                 alt="menu"
//                 width={28} 
//                 height={28}
//                 className="cursor-pointer ml-auto"
//                 onClick={() => setOpen((prev) => !prev)}
//             />
//             {open && (
//                 <div className="absolute bg-black text-white top-20 left-0 w-full h-[calc(100vh-800)]">
//                     <Link href="/">Homepage</Link>
//                     <Link href="/shop">Shop</Link>
//                     <Link href="/deals">Deals</Link>
//                     <Link href="/about">About</Link>
//                     <Link href="/contact">Contact</Link>
//                     <Link href="/logout">Logout</Link>
//                     <Link href="/cart">Cart (1)</Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Menu;








// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Menu = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="relative">
//             {/* MENU BUTTON */}
//             <Image 
//                 src="/menu.png" 
//                 alt="menu"
//                 width={28} 
//                 height={28}
//                 className="cursor-pointer ml-auto"
//                 onClick={() => setOpen((prev) => !prev)}
//             />

//             {/* DROPDOWN MENU */}
//             {open && (
//                 <div className="absolute bg-black text-white top-20 right-0 w-48 h-auto p-4">
//                     <Link href="/" className="block py-2">Homepage</Link>
//                     <Link href="/shop" className="block py-2">Shop</Link>
//                     <Link href="/deals" className="block py-2">Deals</Link>
//                     <Link href="/about" className="block py-2">About</Link>
//                     <Link href="/contact" className="block py-2">Contact</Link>
//                     <Link href="/logout" className="block py-2">Logout</Link>
//                     <Link href="/cart" className="block py-2">Cart (1)</Link>
//                 </div>
//             )}

//         </div>
//     );
// };

// export default Menu;




"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;