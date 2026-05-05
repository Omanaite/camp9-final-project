'use client';
import { forwardRef } from 'react';
import Image from 'next/image'

type Input = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends Input {
  label: string;
  isClickable: boolean;
}

const CheckboxButton = forwardRef<HTMLInputElement, Props>(
  ({ id, label, isClickable, ...props }: Props, ref) => {
    return (
      <>
        <label htmlFor={id}>
          {isClickable ? (
            <>
              <span className="align-middle">{label}</span>
              <input
                ref={ref}
                className="checkmarkBox"
                type="checkbox"
                id={id}
                {...props}
              />
            </>
          ) : (
            <div className="w-[36px] h-[36px] bg-peach shadow-brutal border-brutal rounded-md flex items-center justify-center">
              <Image
                src="/images/Icons/checkSvg.svg"
                alt="checked box"
                className="items-center"
                width={20}
                height={20}
              />
            </div>
          )}
        </label>
      </>
    );
  }
);

export default CheckboxButton;
CheckboxButton.displayName = 'CheckboxButton';