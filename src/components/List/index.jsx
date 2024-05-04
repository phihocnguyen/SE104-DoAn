import ListItem from '../List/ListItem'
const ListItemsContainer = ({items}) => (
	<>
		{items.map((item, index) => (
			<ListItem item={item} key={index} />
		))}
	</>
)
const List = ({items}) => {
    return (
        <div className="w-full h-[97%] mt-5 bg-white rounded-lg border border-gray-800 ">
                    <table className="table-auto w-full  ">
						<thead className="h-[20%] bg-gray-800 rounded-t-lg h-18"> 
                        <tr className=' px-4 py-3 flex justify-start items-center '>
                            <ListItemsContainer items={items}/>
                        </tr>
						</thead>
                    </table>
        </div>

    )
}
export default List