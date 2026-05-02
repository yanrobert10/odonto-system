import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
            
                <p>

                    &copy; {new Date().getFullYear()} OdontoSystem. Todos os direitos reservados -  
                    <Link href="https://github.com/yanrobert10" className=" hover:text-black"> @yanrobert10</Link>

                </p>
            
        </footer>
    )
}