import { Inter } from '@next/font/google'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <h2 className={inter.className}>About page</h2>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
