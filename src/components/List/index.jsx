import ListItem from '../List/ListItem'
const ListItemsContainer = ({ items }) => (
    <>
        {items.map((item, index) => (
            <ListItem item={item} key={index} />
        ))}
    </>
)
const List = ({ items, items1 }) => {
    return (
        <div className=" mt-5 ">
            <table className="rounded-lg table-fixed max-h-[75%] w-full  bg-white border border-gray-800  ">
                <thead className="h-[20%] bg-gray-800 rounded-t-lg h-18">
                    <tr className=' px-4 py-3 flex justify-start items-center '>
                        <ListItemsContainer items={items} />
                    </tr>
                </thead >
                <tbody >
                    <tr className=' px-4 py-3 flex justify-start items-center '>
                        <ListItemsContainer items={items1} />
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default List