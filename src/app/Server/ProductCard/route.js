// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// export async function POST(req) {
  
//   const body = await req.json();
//   if (body) {
    
//   }
//   return NextResponse.json({ message: body.greeting });
//   console.log("hello world");

// }












import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Validate the body data
    const { name, description, price, category, images, stock } = body;

    if (!name || !description || !price || !category || !images || stock === undefined) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Create a new product in the database
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        images,
        stock,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
