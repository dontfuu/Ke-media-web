
'use client';
import * as React from 'react';
export function Tabs({ defaultValue, children, className='' }: any){ return <div data-tabs className={className}>{children}</div> }
export function TabsList({ children, className='' }: any){ return <div className={`rounded-xl border grid ${className}`}>{children}</div> }
export function TabsTrigger({ value, children, className='', onClick }: any){ return <button onClick={onClick} className={`px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl ${className}`}>{children}</button> }
export function TabsContent({ value, children, className='' }: any){ return <div className={className}>{children}</div> }
