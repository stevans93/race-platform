import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader/Loader";
import AddEventButton from "../../components/AddEventButton/AddEventButton";
import ErrorPage from "../ErrorPage/ErrorPage";
import Modal from "../../components/Modal/Modal";
import Event from "../Event/Event";
import DeleteForm from "../../components/DeleteForm/DeleteForm";
import EditEventForm from "../../components/EditEventForm/EditEventForm";
import AddEventForm from "../../components/AddEventForm/AddEventForm";
import useEventModals from "../../hooks/useEventModals";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";

const Events = () => {
  const title = 'Events';

  const {
    isOpen,
    setIsOpen,
    modalTitle, 
    selectedEvent, 
    eventsHeaders,
    isLoading,
    isError,
    error,
    eventsData,
    handleAddEventClick,
    handleCreateEvent,
    handleDeleteEvent,
    handleEditEvent,
  } = useEventModals();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage error={error}/>;
  }

  return (
    <PageWrapper>
        <PageHeading buttons={<AddEventButton onClick={handleAddEventClick} />} showSearch />
        <ContentWrapper>
            <DashboardHeading title={title} />

            <Table headers={eventsHeaders} data={eventsData} />

            <Modal title={modalTitle} isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {modalTitle === 'Add Event' ? ( <AddEventForm onSave={handleCreateEvent} /> ) : null}
              {modalTitle === 'Edit Event' && selectedEvent ? ( <EditEventForm event={selectedEvent} onSave={handleEditEvent} /> ) : null}
              {modalTitle === 'View Event' && selectedEvent ? ( <Event event={selectedEvent} /> ) : null}
              {modalTitle === 'Delete Event' && selectedEvent ? ( <DeleteForm title={'Event'} info={'Event'} closeModal={() => setIsOpen(false)} deleteFn={handleDeleteEvent} /> ) : null}
            </Modal>
        </ContentWrapper>
    </PageWrapper>
  )
}

export default Events;
