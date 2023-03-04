import Navbar from "@/component/Navbar"

export default function MainLayout({ children }){

    return(
        <div>
            <Navbar>
            </Navbar>

            {children}
        </div>
    )
}
