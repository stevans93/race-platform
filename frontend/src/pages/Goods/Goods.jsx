import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Goods = () => {
  const title = 'Goods';

  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
          <DashboardHeading title={title} />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Goods;
