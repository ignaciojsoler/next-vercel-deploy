import Head from "next/head";
import Image from "next/image";
import Navbar from "../Navbar";
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Home - Ignacio</title>
                <meta name="description" content="Home page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={`${styles.main} ${styles.bgBlue}`}>
                {children}
                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                    <div className={styles.thirteen}>
                        <Image
                            src="/thirteen.svg"
                            alt="13"
                            width={40}
                            height={31}
                            priority
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MainLayout;

