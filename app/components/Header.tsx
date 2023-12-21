import Link from "next/link";
import nba_logo from '../assets/logos/nba_logo.png'
import Image from "next/image";


export default function Header() {
    return (
        <header className="bg-secondary_dark p-4 flex items-center justify-around">
        
            <div className="w-16">
              <Link href="/">
                <Image src={nba_logo} alt="NBA Logo" />
              </Link>
            </div>
            <div className="flex items-center justify-center text-white font-bold text-sm sm:text-base gap-3">

              <Link href={"/"}>Scores</Link>
              <Link href={"/"}>Schedule</Link>
              <Link href={"/"}>Standings</Link>
              

            </div>  
          
      
        </header>
      );
}