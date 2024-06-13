import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Packages = () => {
  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
            <h1 className="text-[22px]">Packages</h1>
            <hr className="border border-1"/>
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Packages;
