import Navbar from "@/component/Navbar";
import { stringToArray, toNumber } from "@/helper/convert";
import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";

export default function About(){

    useEffect(() => {
        // console.log(stringToArray("test"))
    }, [])

    return (
        <MainLayout>
            About
        </MainLayout>
    );
}
