// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
import { IoMenuOutline } from "react-icons/io5";

// export default function Menu() {
//   return (
//     <Sheet >
//       <SheetTrigger asChild>
//         <Button variant="outline" className=" text-white hover:text-white bg- border-none bg-transparent hover:bg-transparent text-4xl"><IoMenuOutline />
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>
//           <SheetDescription>
//             Make changes to your profile here. Click save when you're done.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   )
// }

















import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoCartOutline } from "react-icons/io5"

const products = [
  { id: 1, name: "Product 1", price: "$10.00" },
  { id: 2, name: "Product 2", price: "$20.00" },
  { id: 3, name: "Product 3", price: "$15.00" },
]

export default function CartMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-white border-none hover:text-white bg-transparent hover:bg-transparent text-4xl">
          <IoMenuOutline />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            Review your selected items before proceeding to checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {products.map(product => (
            <div key={product.id} className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">{product.name}</Label>
              <span className="col-span-2">{product.price}</span>
              <Button variant="outline" className="col-span-1">Remove</Button>
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button">Proceed to Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
