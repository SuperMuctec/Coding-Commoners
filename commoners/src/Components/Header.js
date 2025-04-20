import React from 'react'
import PropTypes from 'prop-types'
import { darkmode } from '../utils/spaghetti.js'
export const Header = (props) => {
  return (
    <nav className="flex justify-between bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-violet-800 dark:to-pink-800">
        <span className="px-20 py-4 font-semibold text-xl text-white transform-gpu transition-transform hover:-translate-y-1">{props.title}</span>
        <ul className="px-28 text-[17px] py-4 flex space-x-6 justify-end font-mono">
            <a href="#"><li className="border-2 border-slate-200 hover:border-2 hover:border-slate-800 transform-gpu transition-transform text-white hover:bg-orange-500 hover:-translate-y-1 px-4 rounded-full py-[5px]">Home</li></a>
            <a href="Bot-Documentation/index.html"><li className="border-2 border-slate-200 hover:border-2 hover:border-slate-800 transform-gpu transition-transform text-white hover:bg-orange-500 hover:-translate-y-1 px-4 rounded-full py-[5px]">Documents</li></a>
            <a href="https://github.com/SuperMuctec"><li className="border-2 border-slate-200 hover:border-2 hover:border-slate-800 transform-gpu transition-transform text-white hover:bg-orange-500 hover:-translate-y-1 px-4 rounded-full py-[5px]">Github</li></a>
            <a href="https://discord.gg/fmHmS6bfAX"><li className="border-2 border-slate-200 hover:border-2 hover:border-slate-800 transform-gpu transition-transform text-white hover:bg-orange-500 hover:-translate-y-1 px-4 rounded-full py-[5px]">Join Us</li></a>
            <button onClick={darkmode} id = "darkmode-btn" className="transform-gpu transition-transform hover:-translate-y-1"><img className = "w-8" src="/dark.svg" alt=""/></button>
        </ul>
    </nav>
  )
}

Header.propTypes = {
    title: PropTypes.string
}
