import { Inter } from '@next/font/google'
import MainLayout from '../components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h2 className={inter.className}>Home page</h2>
    </MainLayout>
  )
}
