import React from 'react'

const FavouriteModalList = () => {
  return (
    <>
        <div class="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 class="text-lg font-bold px-4">Favourite Locations</h3>
            <ul class="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                <li class="hover:bg-gray-200">Dhaka</li>
                <li class="hover:bg-gray-200">Rangpur</li>
                <li class="hover:bg-gray-200">Europe</li>
            </ul>
        </div>
    </>
  )
}

export default FavouriteModalList