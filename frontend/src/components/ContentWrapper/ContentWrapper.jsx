import CS from "../../utils/mergeClasses";

const ContentWrapper = ({ children, className }) => {
  return (
    <div className={CS("flex h-full flex-col rounded-t-xl bg-main content-wrapper", className)}>
        <div className="flex h-auto flex-col justify-between gap-4 rounded-t-xl bg-main p-6">
            { children }
        </div>
    </div>
  )
}

export default ContentWrapper;
