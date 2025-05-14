import ProfileInfo from "../ProfileInfo/ProfileInfo";
import SearchInput from "../SearchInput/SearchInput";

const PageHeading = ({ buttons, showSearch }) => {
  
  return (
    <div className='flex h-20 min-h-20 w-full flex-row items-center rounded-xl bg-main content-wrapper'>
      {buttons ? (
        <div>
          <div className='flex flex-row gap-4 pl-6'>{buttons}</div>
        </div>
      ) : null}

      <div className='ml-auto flex flex-row items-center gap-7 pr-6'>
        {showSearch && <SearchInput />}
        <ProfileInfo />
      </div>
    </div>
  )
}

export default PageHeading;
