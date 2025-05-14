const MainWrapper = ({children}) => {
  return (
    <div className={('flex w-1/2 flex-col items-center overflow-y-auto bg-white')}>{children}</div>
  )
}

export default MainWrapper;
