'use client'

import React from "react";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@/components/CustomMap"), { ssr: false });

const Map = () => {
  return(
    <CustomMap latitude={55.751244} longitude={37.618423} zoom={10} />
  )
}

export default Map