'use client'

import { useState } from "react"

interface ITab {
  id: number,
  name: string,
  content: string
}

const Tabs = ({tabs}: {tabs:ITab[]}) => {
  const [activeTab, setActiveTab] = useState(0)
  return(
    <div>
      <div className="grid grid-auto-fit gap-5 mb-10">
        {
          tabs.map((tab, index) => (
            <button 
              key={index}
              onClick = {() => setActiveTab(index)}
              className={`
                w-full
                h-12
                text-[16px]
                font-bold
                text-green
                rounded-3xl
                border
                border-green
                border-solid
                ${activeTab === index ? 'bg-green text-white' : 'transparent'}
              `}
            >
              {tab.name}
            </button>
          ))
        }
      </div>

      <div className="">
        {tabs[activeTab].content}
      </div>

    </div>
  )
}

export default Tabs