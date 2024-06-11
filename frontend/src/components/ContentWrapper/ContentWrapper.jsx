const ContentWrapper = ({ children }) => {
  return (
    <div className="flex h-full flex-col rounded-t-xl bg-main content-wrapper">
        <div className="flex h-auto flex-col justify-between gap-6 rounded-t-xl bg-main p-6">
            { children }
        </div>
    </div>
  )
}

export default ContentWrapper;
