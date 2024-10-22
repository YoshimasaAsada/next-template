'use client';
import { WrappedCustomInput } from '@/components/Test';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef<HTMLHeadingElement | null>(null);

  const onClick = () => {
    if (ref.current) {
      console.log(ref.current);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WrappedCustomInput ref={ref} />
      <button onClick={onClick}>ぼたん</button>
    </div>
  );
}
