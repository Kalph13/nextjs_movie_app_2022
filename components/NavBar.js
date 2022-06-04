import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();

    return (
        <nav>
            <img src="/vercel.svg" alt="Vercel" />
            <div>
                <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    );
};

export default NavBar;