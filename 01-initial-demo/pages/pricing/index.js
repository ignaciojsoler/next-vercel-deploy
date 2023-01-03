import { Inter } from "@next/font/google";
import MainLayout from "../../components/layouts/MainLayout";


const inter = Inter({ subsets: ['greek'] })

export default function pricingPage() {

    return (
        <MainLayout>
            <h2 className={inter.className}>Pricing Page</h2>
        </MainLayout>
    )
}