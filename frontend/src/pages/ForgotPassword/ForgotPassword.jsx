import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import { FaArrowLeftLong } from 'react-icons/fa6';
import LayoutWrapper from '../../components/LayoutWrapper/LayoutWrapper';
import RaceContent from '../../components/RaceContent/RaceContent';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import MainContainer from '../../components/MainContainer/MainContainer';
import MainHeading from '../../components/MainHeading/MainHeading';
import RaceLogo from '../../components/RaceLogo/RaceLogo';

const ForgotPassword = () => {
  const heading = {
    title: 'Change your password!',
    subtitle: 'Enter a new password, our suggestion is to use characters, numbers and symbols.',
  }

  return (
    <LayoutWrapper>
      <RaceContent />

      <MainWrapper>
        <RaceLogo />

        <MainContainer>
          <MainHeading heading={heading} />
          
          <ForgotPasswordForm />

          <Link to={'/'} className='flex items-center justify-center gap-2 font-bold text-secondary text-sm pt-2'><FaArrowLeftLong className='h-5 w-5' /><span>Go back!</span></Link>
        </MainContainer>

      </MainWrapper>
    </LayoutWrapper>
  )
}

export default ForgotPassword;
