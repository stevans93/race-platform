const Table = (data) => {

    const headers = Object.keys(data.headers).map((key) => {
        return (
            <th key={key} className='px-5 py-2 text-start font-normal bg-primary'>
                {data.headers[key]}
            </th>
        );
    });

    const rows = data.data.map((row, index) => {
        return (
            <tr key={index}>
                {Object.keys(data.headers).map((key) => (
                    <td key={key} className='px-5 py-3.5'>
                        {row[key]}
                    </td>
                ))}
            </tr>
        );
    });

  return (
    <div className='overflow-x-auto rounded-lg border border-primary'>
        <table className='table w-full'>
            <thead>
                <tr className="text-[16
                    px]">
                    {headers}
                </tr>
            </thead>
            <tbody className="text-[14px]">
                {rows}
            </tbody>
        </table>
    </div>
  )
}

export default Table;
