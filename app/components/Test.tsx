'use client';
import { forwardRef } from 'react';

const Test = (props, ref) => {
  console.log(ref);
  return <h1 ref={ref}>TEST</h1>;
};

export const WrappedCustomInput = forwardRef(Test);
