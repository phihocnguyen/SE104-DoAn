import ListItem from '../List/ListItem'
const items = [
	{ label: 'STT'},
	{ label: 'HỌ VÀ TÊN'  },
	{ label: 'NGÀY SINH'  },
	{ label: 'GIỚI TÍNH'  },
	{ label: 'QUÊ QUÁN'  },
	{ label: 'ĐỐI TƯỢNG'  },
	{ label: 'NGÀNH HỌC'  },
]

const ListItemsContainer = () => (
	
	<>
		{items.map((item, index) => (
			<ListItem item={item} key={index} />
		))}
	</>
)
const List = () => {
    return (
        <div className="mt-5 col-span-6 w-200 h-200 relative bg-white rounded-lg border border-gray-800">
                    <div className=" w-200 h-16 left-0 top-0 bg-gray-800 rounded-t-lg">
                        <ul className='flex justify-start items-center px-4'>
                            <ListItemsContainer/>
                        </ul>
                    </div>
        </div>

    )
}
export default List