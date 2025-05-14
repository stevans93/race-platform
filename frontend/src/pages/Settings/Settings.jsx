import ContentWrapper from "../../components/ContentWrapper/ContentWrapper"
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading"
import PageHeading from "../../components/PageHeading/PageHeading"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import SettingsSaveButton from "../../components/SettingsSaveButton/SettingsSaveButton"
import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm"

const Settings = () => {
  const title = 'Settings';

  return (
    <PageWrapper>
        <PageHeading buttons={<SettingsSaveButton />} showSearch />
        <ContentWrapper className='w-2/5 min-w-96'>
          <DashboardHeading title={title} />
          <UserSettingsForm />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Settings;
