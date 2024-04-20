import { Item, Category, Size } from '../types';

const WardrobeListItem = ({
  item,
  categories,
  sizes,
  setItemDetails,
  setOpenDetailsModal,
  setOpenEditModal,
  setDeleteId,
  setOpenDeleteModal,
}: {
  item: Item;
  categories: Category[];
  sizes: Size[];
  setItemDetails: (item: Item) => void;
  setOpenDetailsModal: (open: boolean) => void;
  setOpenEditModal: (open: boolean) => void;
  setDeleteId: (id: string) => void;
  setOpenDeleteModal: (open: boolean) => void;
}) => {
  const handleViewClick = () => {
    setItemDetails(item);
    setOpenDetailsModal(true);
  };

  const handleEditClick = () => {
    setItemDetails(item);
    setOpenEditModal(true);
  };

  const handleRemoveClick = () => {
    setDeleteId(item.id);
    setOpenDeleteModal(true);
  };

  return (
    <tr
      key={item.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-6 py-4">
        {item.image ? (
          <img
            src={item.image}
            className="min-w-16 md:w-32 max-w-full max-h-full"
            alt={item.name}
          />
        ) : (
          <div className="py-6 flex items-center justify-center min-w-16 md:w-32 max-w-full max-h-full bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        )}
      </td>
      <td className="px-6 py-4">
        {categories.find((category) => category.id === item.categoryId)?.name}
      </td>
      <td className="px-6 py-4 font-semibold text-lg">
        {sizes.find((size) => size.id === item.sizeId)?.name}
      </td>
      <td className="px-6 py-4">
        <div
          className="w-8 h-8 shadow-md rounded-lg"
          style={{ backgroundColor: item.color }}
        ></div>
      </td>
      <td className="px-6 py-4">
        {new Date(item.purchaseDate).toDateString()}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end space-x-2">
          <button onClick={handleViewClick} title="View">
            <ViewIcon />
          </button>
          <button onClick={handleEditClick} title="Edit">
            <EditIcon />
          </button>
          <button onClick={handleRemoveClick} title="Remove">
            <RemoveIcon />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default WardrobeListItem;

const ViewIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
    />
    <path
      stroke="currentColor"
      strokeWidth="2"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-gray-200"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
    />
  </svg>
);

const RemoveIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-gray-200"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
    />
  </svg>
);
