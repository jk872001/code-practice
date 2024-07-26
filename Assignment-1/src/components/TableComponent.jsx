/* eslint-disable react/prop-types */

const TableComponent = ({ filterBatchList }) => {

  return (
    <div className="overflow-x-auto border border-black">
      <table className="min-w-full bg-white  rounded-md">
        <thead className="rounded-md">
          <tr className="w-full bg-[#f2f2f2]  text-left">
            <th className="py-2 px-4 border-r text-[#4b4747] border-black">
              <p className="p-3">Title</p>
            </th>
            <th className="py-2 px-4 border-r text-[#4b4747] border-black">
              Start Date
            </th>
            <th className="py-2 px-4 border-r text-[#4b4747] border-black">
              End Date
            </th>
            <th className="py-2 px-4 border-r text-[#4b4747] border-black">
              Price
            </th>
            <th className="py-2 px-4 border-r text-[#4b4747] border-black">
              Validity/Expiry
            </th>
            <th className="py-2 px-4  text-[#4b4747] ">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          {filterBatchList.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-r border-black">
                <div className="flex gap-5 flex-col  text-center md:text-left lg:flex-row items-center p-1">
                  <img
                    alt="course_img"
                    src={item.title.titleImg}
                    width="100px"
                  />
                  <p>{item.title.titleName}</p>
                </div>
              </td>
              <td className="py-2 px-4 border-r border-black">
                {item.startDate}
              </td>
              <td className="py-2 px-4 border-r border-black">
                {item.endDate}
              </td>
              <td className="py-2 px-4 border-r border-black">{item.price}</td>
              <td className="py-2 px-4 border-r border-black">
                {item.validity}
              </td>
              <td className="py-2 px-4 ">
                {item.status === "Published" ? (
                  <p className="bg-[#deffde] border-2 border-[#78f774] p-1 text-center rounded-md">
                    {item.status}
                  </p>
                ) : (
                  <p className="bg-[#f3f3f3] border-2 border-[#e2bbe9] p-1 text-center rounded-md">
                    {item.status}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
