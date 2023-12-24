import React from 'react'
import "../sass/Wishlist.scss"
import { useSelector } from 'react-redux';
import WishlistCard from './WishlistCard';


function Wishlist() {

    const wishlist = useSelector((store)=>store.wish.wishlist);
    
  return (
    <>{
        wishlist ? 
        <div className='wishlist-container'>
            <div className='wishlist-path'>
                <div><span>Home / </span>My Wishlist</div>
            </div>
            <div className='wishlist-content'>
                <div className='wishlist-total'>
                   <h2>
                   My Wishlist ({wishlist.items.length})
                   </h2>
                </div>
                <div className='wishlist-items'>
                    {
                        wishlist.items.map((book)=>{
                            return <WishlistCard bookData={book} />
                        })
                    }
                </div>
            </div>
        </div>  :
        <div>Loging</div>
    }
    </>
  )
}

export default Wishlist