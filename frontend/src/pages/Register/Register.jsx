import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LayoutWrapper from '../../components/LayoutWrapper/LayoutWrapper';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import RaceContent from '../../components/RaceContent/RaceContent';
import MainHeading from '../../components/MainHeading/MainHeading';
import RaceLogo from '../../components/RaceLogo/RaceLogo';
import MainContainer from '../../components/MainContainer/MainContainer';

const Register = () => {
  const heading = {
    title: 'Create an account!',
    subtitle: (
      <span>You already have an account! <Link to={'/'} className='font-semibold text-secondary'>Login</Link></span>
    ),
  }

  return (
    <LayoutWrapper>
      <RaceContent />

      <MainWrapper>
        <RaceLogo />

        <MainContainer>
          <MainHeading heading={heading} />
          
          <RegisterForm />
        </MainContainer>
      </MainWrapper>
    </LayoutWrapper>
  )
}

export default Register;