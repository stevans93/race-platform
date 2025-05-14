import { isRouteErrorResponse } from 'react-router-dom';
import ErrorImg from '../../assets/ErrorImg.png';

const ErrorPage = ({ error }) => {
    const renderError = () => {
        return isRouteErrorResponse(error) ? (
          <i>{error.statusText || error.data}</i>
        ) : (
          <p>{(error.message || 'Unknown Error')}</p>
        );
      };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <img src={ErrorImg} alt="Error Page" className='max-w-full w-[500px]' />
      <div className='font-semibold text-center'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{renderError()}</p>
      </div>
    </div>
  )
}

export default ErrorPage;
