
export function Badge({ children, className='', variant='secondary' }: any){
  const variants:any = { secondary: 'bg-slate-200 text-slate-900', default: 'bg-black text-white' };
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs ${variants[variant]} ${className}`}>{children}</span>
}
