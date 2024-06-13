import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Goods = () => {
  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
            <h1 className="text-[22px]">Goods</h1>
            <hr className="border border-1"/>
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Goods;
