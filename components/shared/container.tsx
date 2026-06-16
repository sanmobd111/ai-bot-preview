import React from 'react'

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`mx-auto max-w-[1460] p-6 xl:p-0 w-full xl:w-[90%] 2xl:w-full ${className}`}>
            {children}
        </div>
    )
}
