import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Table from "../../components/Table/Table";
import Loader from "../../components/Loader/Loader";
import AddUserButton from "../../components/AddUserButton/AddUserButton";
import ErrorPage from "../ErrorPage/ErrorPage";
import Modal from "../../components/Modal/Modal";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import ViewUserProfile from "../../components/ViewUserProfile/ViewUserProfile";
import DeleteForm from "../../components/DeleteForm/DeleteForm";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import useUserModals from "../../hooks/useUserModals";
import DashboardHeading from "../../components/DashboardHeading/DashboardHeading";

const Users = () => {
  const title = 'Users';

    const {
      isOpen,
      setIsOpen,
      modalTitle,
      usersData,
      usersHeaders,
      isLoading,
      isError,
      error,
      handleAddUserClick,
      handleDeleteUser,
      selectedUser,
      handleEditUser,
      handleCreateUser,
    } = useUserModals();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage error={error}/>;
  }

  return (
    <PageWrapper>
        <PageHeading buttons={<AddUserButton onClick={handleAddUserClick} />} showSearch />
        <ContentWrapper>
            <DashboardHeading title={title} />
            
            <Table headers={usersHeaders} data={usersData} />

            <Modal title={modalTitle} isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {modalTitle === 'Edit User' && selectedUser ? ( <EditUserForm user={selectedUser} onSave={handleEditUser}/> ) : null}
              {modalTitle === 'View User' && selectedUser ? ( <ViewUserProfile user={selectedUser} /> ) : null}
              {modalTitle === 'Delete User' && selectedUser ? ( <DeleteForm title={'User'} info={'User'} closeModal={() => setIsOpen(false)} deleteFn={handleDeleteUser} /> ) : null}
              {modalTitle === 'Add User' ? ( <AddUserForm onSave={handleCreateUser} /> ) : null}
            </Modal>

        </ContentWrapper>
    </PageWrapper>
  )
}

export default Users;
