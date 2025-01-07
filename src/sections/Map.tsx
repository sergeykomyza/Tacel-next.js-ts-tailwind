'use client'

import React from "react";
import dynamic from "next/dynamic";

const CustomMap = dynamic(() => import("@/components/CustomMap"), { ssr: false });

const Map = () => {
  return(
    <CustomMap latitude={55.716397} longitude={37.644737} zoom={13} />
  )
}

export default Map