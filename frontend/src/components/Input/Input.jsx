import { forwardRef } from "react";
import CS from '../../utils/mergeClasses';

const Input = forwardRef(({
  id,
  layout,
  labelText,
  labelClassName,
  showError,
  errorClassName,
  type,
  name,
  value,
  className,
  placeholder,
  icon,
  iconView,
  iconClassName,
  iconViewClassName,
  minValue,
  maxValue,
  readOnly,
  checked,
  inputClass,
  inputWrapperClass,
  labelClick,
  isMandatory,
  ...props
}, ref) => {
  return (
    <div className={CS('grid w-full gap-2', layout)}>

      {labelText ? (
        <label htmlFor={name} onClick={labelClick} className={CS('relative flex font-light', labelClassName)}>
          <p>
            {labelText}
            {isMandatory ? <span className='text-red-600'>*</span> : null}
          </p>
      </label>
      ) : null}

      <div className={CS(`${type === 'checkbox' ? 'flex items-center' : 'h-15'}`, inputWrapperClass)}>
        <div className={CS('relative flex w-full', inputClass)}>

          <input
            min={minValue}
            max={maxValue}
            type={type}
            id={id}
            name={name}
            ref={ref}
            value={value}
            readOnly={readOnly}
            className={CS('relative mx-auto h-[50px] w-full rounded-lg border-2 border-primary bg-[#FAFBFE] py-4 pl-12 outline-none text-sm placeholder:text-sm placeholder:text-secondary', className, showError ? 'border border-pink-500 placeholder:text-pink-500' : '',)}
            placeholder={showError || placeholder}
            checked={checked}
            {...props}
          />

          <div className={CS('absolute left-3 top-[50%] -translate-y-[50%]', iconClassName)}>{icon}</div>
          <div className={CS('absolute right-5 top-[50%] flex -translate-y-[50%] items-center', iconViewClassName)}>
            {iconView}
          </div>

        </div>
      </div>

    </div>
  )
});

Input.displayName = 'Input';

export default Input
