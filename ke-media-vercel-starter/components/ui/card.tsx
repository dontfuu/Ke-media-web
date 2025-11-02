
import * as React from 'react';
export function Card({ className='', children }: any){ return <div className={`rounded-2xl border p-0 ${className}`}>{children}</div> }
export function CardHeader({ children, className='' }: any){ return <div className={`p-4 ${className}`}>{children}</div> }
export function CardTitle({ children, className='' }: any){ return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3> }
export function CardDescription({ children, className='' }: any){ return <p className={`text-slate-500 dark:text-slate-400 text-sm ${className}`}>{children}</p> }
export function CardContent({ children, className='' }: any){ return <div className={`p-4 pt-0 ${className}`}>{children}</div> }
export function CardFooter({ children, className='' }: any){ return <div className={`p-4 pt-0 ${className}`}>{children}</div> }
