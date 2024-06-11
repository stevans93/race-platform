const PageWrapper = ({children}) => {
  return (
    <div className='flex h-full flex-col gap-7 overflow-scroll bg-[#EFEFEF] px-7 pt-6'>{children}</div>
  )
}

export default PageWrapper;
