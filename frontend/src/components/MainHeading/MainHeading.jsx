import CS from '../../utils/mergeClasses';

const MainHeading = ({ heading, className }) => {
  return (
    <>
        <h1 className={CS('w-full text-2xl font-bold', className)}>{ heading.title } </h1>
        <p className='mb-3 w-full text-secondary'>{ heading.subtitle }</p>
    </>
  )
}

export default MainHeading;
