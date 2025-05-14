// import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
// import SocialLoginButtons from "../../components/SocialLoginButtons/SocialLoginButtons";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import RaceContent from "../../components/RaceContent/RaceContent";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import RaceLogo from "../../components/RaceLogo/RaceLogo";
import MainHeading from "../../components/MainHeading/MainHeading";
import MainContainer from "../../components/MainContainer/MainContainer";

const Login = () => {
  const heading = {
    title: 'Sign in',
    subtitle: 'Welcome back!',
  }

  return (
    <LayoutWrapper>
      <RaceContent />

      <MainWrapper>
        <RaceLogo />

        <MainContainer>
          <MainHeading heading={heading} />
          
          <LoginForm />

          {/* <div className='flex w-full justify-center gap-1 pt-3'>
            <p className='text-secondary text-sm'>Don't have an account?</p>
            <Link to={'/register'} className='font-semibold text-secondary text-sm'>Register</Link>
          </div> */}

          {/* <div className='flex w-full items-center justify-center gap-2 pt-3'>
            <div className='flex-1 border bg-secondary opacity-90'></div>
            <p className='text-secondary text-sm'>Choose a different login option!</p>
            <div className='flex-1 border bg-secondary opacity-90'></div>
          </div> */}

          {/* <SocialLoginButtons /> */}
        </MainContainer>
      </MainWrapper>
    </LayoutWrapper>
  )
}

export default Login;
