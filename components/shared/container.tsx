import React from 'react'

export default function Container({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-auto max-w-400 p-4 lg:p-0">
            {children}
        </div>
    )
}
