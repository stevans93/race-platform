import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Table from "../../components/Table/Table";

const Events = () => {
  const eventsHeaders = {
    name: 'Name',
    date: 'Date',
    price: 'Price',
    createdAt: 'Created At',
    updateAt: 'Update At',
    actions: '',
  };

  const data = [
    {
      name: 'Beljanica',
      image: 'Image',
      banner: 'Banner',
      date: '2024-05-22T11:57:19.274+00:00',
      price: 70,
      info: 'Info info info',
      createdAt: '2024-05-22T11:57:19.274+00:00',
      updateAt: '2024-05-22T11:57:19.274+00:00',
      actions: (<div><a className="border border-2 border-primary px-4 py-1 rounded-lg hover:bg-primary text-secondary font-medium">Details</a></div>)
    }
  ];

  return (
    <PageWrapper>
        <PageHeading />
        <ContentWrapper>
            <h1 className="text-[22px]">Events</h1>
            <hr className="border border-1"/>
            <Table headers={eventsHeaders} data={data} />
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Events;
