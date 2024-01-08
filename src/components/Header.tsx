import home from './icons/home.png'
import cart from './icons/shopping-cart.png'
import search from './icons/search.png'
import user from './icons/user.png'

export default function Header() {
  return (
    <div className="flex justify-center mt-[1%]">
      <div className="bg-gradient-to-br from-[#111213] to-[#0B0B0C] rounded-[10px] border-[1px] border-[#111213] backdrop-blur-sm w-[98.5%] p-[2%]">
        <nav>
          <ul className="flex flex-row justify-center gap-x-[70px]">
            <li className="ease-out duration-100 p-1 rounded-[10px] hover:bg-gradient-to-r from-[#6E4EEE] to-transparent">
              <button className="ease-out duration-100 flex flex-row text-transparent hover:text-[#6E4EEE]"><img className='' src={home} alt="Home icon.png" /> Home</button>
            </li>
            <li className="ease-out duration-100 p-1 rounded-[10px] hover:bg-gradient-to-r from-[#BB4EEE] to-transparent">
              <button className="ease-out duration-100 flex flex-row text-transparent hover:text-[#BB4EEE]"><img className='' src={cart} alt="Shopping cart icon.png" /> Cart</button>
            </li>
            <li className="ease-out duration-100 flex flex-row w-[10%] p-1 rounded-[10px] hover:bg-gradient-to-r from-[#EEA54E] to-transparent">
              <img className='' src={search} alt="Search icon.png" /><input className="ease-out duration-100 w-[10%] bg-transparent placeholder:text-transparent hover:placeholder:text-[#EEA54E]" type="text" placeholder="Search" />
            </li>
            <li className="ease-out duration-100 p-1 rounded-[10px] hover:bg-gradient-to-r from-[#4EBEEE] to-transparent">
              <button className="ease-out duration-100 flex flex-row text-transparent hover:text-[#4EBEEE]"><img className='' src={user} alt="User icon.png" /> Profile</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
