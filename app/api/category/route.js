
import { categoryData } from "@/data/categoryData";

import { NextResponse } from "next/server"

export async function GET(request) {
  return NextResponse.json({categoryData})
}