import { motion } from "motion/react"

const Opanimation = () => {
  return (
    <motion.div animate={{ opacity:0, pointerEvents:"none" }} transition={{ delay:8, duration:2, ease:"easeInOut" }} className='fixed w-full h-full bg-white z-50 flex items-center justify-center'>
        <motion.img animate={{ opacity:1 }} initial={{ opacity:0 }} transition={{ duration: 1.5, delay:3, ease:"easeOut" }} src="/gambar/B-removebg-preview 1.png" alt="" />
        <motion.div animate={{ width:10, opacity:0 }} transition={{ duration: 1.5, delay:3, ease:"easeOut" }} className='fixed top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%] bg-white w-[800px] h-[489px]'>
        </motion.div>
        <motion.div animate={{ width:"10000px", height:"10000px" }} transition={{ duration:6, delay:5, ease:"easeOut" }} className="bg-gradient-to-r from-slate-50 to-purple-300 w-3 h-3 fixed -z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full">

        </motion.div>
    </motion.div>
  )
}

export default Opanimation
