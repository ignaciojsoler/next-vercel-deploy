
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router'


const ActiveLink = ({ text, href }) => {
    const {asPath} = useRouter()

    const style={
        color: "rgb(184, 94, 184)"
    }

    return (
        <Link href={href} style={asPath === href ? style : null}>
            {text}
        </Link>
    );
};

export default ActiveLink;