import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    {
        return (
            <div>
                <Header></Header>
                {children}
                <Footer></Footer>
            </div>
        )
    }
}
