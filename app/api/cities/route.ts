import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  console.log("\n=== POST /api/cities STARTED ===");
  
  try {
    // Step 1: Parse body
    console.log("Step 1: Parsing request body...");
    const body = await req.json();
    console.log("✓ Body parsed:", body);

    const { CityName } = body;
    console.log("CityName:", CityName);

    // Step 2: Validate input
    if (!CityName || CityName.trim() === "") {
      console.log("✗ Validation failed: empty city name");
      return NextResponse.json(
        { error: "input is empty" },
        { status: 400 }
      );
    }

    // Step 3: Check if city exists
    console.log("Step 2: Checking if city exists...");
    const isExist = await prisma.city.findFirst({
      where: {
        name: CityName,
      },
    });
    console.log("✓ Query completed. Exists:", !!isExist);

    if (isExist) {
      console.log("City already exists");
      return NextResponse.json(
        { error: "this name already exist" },
        { status: 400 }
      );
    }

    // Step 4: Create city
    console.log("Step 3: Creating city...");
    const createCityName = await prisma.city.create({
      data: {
        name: CityName,
      },
    });
    console.log("✓ City created:", createCityName);

    console.log("=== SUCCESS ===\n");
    return NextResponse.json(createCityName, { status: 201 });

  } catch (error) {
    console.error("\n=== ERROR CAUGHT ===");
    console.error("Error:", error);
    
    // Proper TypeScript error handling
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorName = error instanceof Error ? error.name : "Unknown";
    
    console.error("Error type:", errorName);
    console.error("Error message:", errorMessage);
    
    if (error instanceof Error && error.stack) {
      console.error("Stack trace:", error.stack);
    }
    
    console.error("===================\n");

    return NextResponse.json(
      { 
        error: "server error POST",
        details: errorMessage
      },
      { status: 500 }
    );
  }
}