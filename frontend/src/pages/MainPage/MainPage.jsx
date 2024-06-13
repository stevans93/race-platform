import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const MainPage = () => {
  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
            <h1 className="text-[22px]">Main Page</h1>
            <hr className="border border-1"/>
        </ContentWrapper>
    </PageWrapper>
  )
}

export default MainPage;
