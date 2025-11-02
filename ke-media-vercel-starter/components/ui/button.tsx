
import * as React from 'react';
export function Button({ asChild, className='', size='md', variant='default', children, ...props }: any) {
  const sizes:any = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-5 py-2.5 text-base' };
  const variants:any = {
    default: 'bg-black text-white hover:opacity-90',
    outline: 'border border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800',
  };
  const Cmp:any = (asChild ? 'a' : 'button') as any;
  return <Cmp className={`rounded-xl ${sizes[size]} ${variants[variant]} ${className}`} {...props}>{children}</Cmp>;
}
export default Button;
