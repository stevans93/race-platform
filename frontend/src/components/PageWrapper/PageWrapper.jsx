const PageWrapper = ({children}) => {
  return (
    <div className={('flex h-full flex-col gap-7 bg-[#EFEFEF] px-5 pt-6')}>{children}</div>
  )
}

export default PageWrapper;
