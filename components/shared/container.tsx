import React from 'react'

export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-auto max-w-[1460] p-6 xl:p-0 w-full xl:w-[90%] 2xl:w-full">
            {children}
        </div>
    )
}
