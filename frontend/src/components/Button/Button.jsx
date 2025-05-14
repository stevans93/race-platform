import CS from '../../utils/mergeClasses';

const Button = ({ label, onClick, type, className, ...props }) => {
  return (
    <button className={CS('w-full rounded-2xl bg-primary px-4 py-3 text-center text-white', className)} type={type} onClick={onClick} {...props}>
      {label}
    </button>
  )
}

export default Button;
