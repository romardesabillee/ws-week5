import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar(){
    const links = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
    ]

    const router = useRouter();

    function activeRoute(href){
        return router.pathname.split('/')[1] === href.split('/')[1];
    }

    return(
        <div>
            {links.map((link) => (
                <Link 
                    className={activeRoute(link.href) ? 'text-red-700': ''}
                    key={link.href} 
                    href={link.href}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}