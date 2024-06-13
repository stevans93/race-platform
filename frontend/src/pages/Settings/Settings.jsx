import ContentWrapper from "../../components/ContentWrapper/ContentWrapper"
import PageHeading from "../../components/PageHeading/PageHeading"
import PageWrapper from "../../components/PageWrapper/PageWrapper"

const Settings = () => {
  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper className='w-2/5 min-w-96'>
            <h1 className="text-[22px]">Settings</h1>
            <hr className="border border-1"/>
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Settings;
