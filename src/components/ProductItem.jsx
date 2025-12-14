 
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext'

const ProductItem = ({image, price, name, id}) => {

         const {currency}= useContext(Shopcontext)
  return (
      <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
        <div className="overflow-hidden">
            <img className='hover:scale-110 transition  ease-in-out shrink-0  h-56 sm:h-64 ' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='pt-3 pb-1 font-medium text-sm'>{currency}{price}</p>
      </Link>
  )
}

export default ProductItem