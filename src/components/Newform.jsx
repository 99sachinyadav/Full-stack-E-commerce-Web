 

const NewForm = () => {
  return (
    < div className='text-center mt-8'> 
    <p className='text-2xl font-medium  text-gray-800'>Subscribe now to get 20% off</p>
    <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore, </p>
    <form className="w-full sm:w-1/2 flex mx-auto my-6 border pl-3 ">
      <input className="w-full outline-none " type="text" placeholder="Enter your email" required/>
      <button className="text-white text-xs bg-black px-10 py-4">SUBSCRIBE</button>
    </form>
    </div>
  )
}

export default NewForm