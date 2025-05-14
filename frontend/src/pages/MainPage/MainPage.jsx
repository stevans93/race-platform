import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const MainPage = () => {
  const title = 'Main Page';

  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
          <DashboardHeading title={title} />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default MainPage;
