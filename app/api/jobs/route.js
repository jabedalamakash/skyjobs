
import { jobsData } from "@/data/jobsData"

import { NextResponse } from "next/server"


export async function GET(request) {
  return NextResponse.json({jobsData})
}
