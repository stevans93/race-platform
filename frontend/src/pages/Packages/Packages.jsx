import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Packages = () => {
  const title = 'Packages';

  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
          <DashboardHeading title={title} />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Packages;
