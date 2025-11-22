import Link from "next/link";
import Filter from "./Filter";
import Search from "./Search";
import CartButton from "./cartButton";


export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="navbar-wrapper d-flex justify-content-between align-items-center">
                                    <Link href="/" className="logo"></Link>
                                    {/* <a className="logo" href="/"></a> */}
                                    <div className="d-flex control-wrapper">
                                        <Filter />
                                        <Search />
                                    </div>
                                    <CartButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}