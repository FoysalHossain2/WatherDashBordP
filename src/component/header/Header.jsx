import Favourite from "./Favourite"
import FavouriteModalList from "./FavouriteModalList"
import From from "./SearchBar"
import Logo from "./Logo"


const Header = () => {
  return (
    <header className=" fixed w-full top-0 z-50 bg-linear-to-b from-black/60 to-black/0 pb-10">
      <nav className="container mx-auto flex items-center justify-between py-6">

              {/* logo */}
              <Logo />

        <div className="flex items-center gap-4 relative">
                  {/* from */}
                  <From />

                  {/* Favourite */}
                  <Favourite/>

          {/* <!-- Modal --> */}
          <FavouriteModalList />

        </div>
      </nav>
	  </header>
  )
}

export default Header