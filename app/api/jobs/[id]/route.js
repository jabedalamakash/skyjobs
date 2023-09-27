
import { data } from "@/data/jobsData";

import { NextResponse } from "next/server"


export async function GET(req,res) {
  console.log(res.params.id);

  



 const jobs= data.filter((job) => job.id == res.params.id);

  if(jobs.length==0){
    return NextResponse.json({messege:"No Data Found"})

  }
  return NextResponse.json({jobs})
}


