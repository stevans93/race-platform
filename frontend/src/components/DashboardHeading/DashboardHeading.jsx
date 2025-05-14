import CS from '../../utils/mergeClasses';

const DashboardHeading = ({ title, className }) => {
  return (
    <>
        <h1 className={CS('text-lg font-medium ml-5', className)}>{ title } </h1>
        <hr className="border border-1"/>
    </>
  )
}

export default DashboardHeading;
