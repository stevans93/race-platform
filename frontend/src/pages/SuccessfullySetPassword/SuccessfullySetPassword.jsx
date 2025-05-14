import Button from "../../components/Button/Button";
import password from '../../assets/password.png';
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import RaceContent from "../../components/RaceContent/RaceContent";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
import RaceLogo from "../../components/RaceLogo/RaceLogo";
import MainContainer from "../../components/MainContainer/MainContainer";
import MainHeading from "../../components/MainHeading/MainHeading";

const SuccessfullySetPassword = () => {
  const heading = {
    title: 'You have successfully changed the password!',
  }
  return (
    <LayoutWrapper>
      <RaceContent />

      <MainWrapper>
        <RaceLogo />

        <MainContainer>
          <MainHeading heading={heading} className='text-center' />

          <img src={password} alt='Password Picture' />

          <Button type='submit' className='rounded-lx bg-color font-semibold text-sm' label='Go to Dashboard!' />
        </MainContainer>

      </MainWrapper>
    </LayoutWrapper>
  )
}

export default SuccessfullySetPassword;
