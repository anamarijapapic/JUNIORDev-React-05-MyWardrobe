import { useEffect, useState } from 'react';
import axios from 'axios';
import WardrobeListItem from './WardrobeListItem';
import DetailsModal from './Modals/DetailsModal';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';
import { Category, Item, Size } from '../types';
import Filters from './Filters';

const WardrobeList = ({
  items,
  categories,
  sizes,
  refresh,
}: {
  items: Item[];
  categories: Category[];
  sizes: Size[];
  refresh: React.Dispatch<React.SetStateAction<Item[]>>;
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [sortByDateDesc, setSortByDateDesc] = useState(true);

  const [deleteId, setDeleteId] = useState('');
  const [itemDetails, setItemDetails] = useState({
    id: '',
    name: '',
    categoryId: '',
    sizeId: '',
    color: '',
    image: '',
    purchaseDate: new Date().toISOString(),
  } as Item);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedSize('');
    setSortByDateDesc(true);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let url = `https://my-json-server.typicode.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe--server/items?`;
        url += selectedCategory ? `&categoryId=${selectedCategory}` : '';
        url += selectedSize ? `&sizeId=${selectedSize}` : '';
        url += sortByDateDesc ? '&_sort=-purchaseDate' : '&_sort=purchaseDate';
        const res = await axios.get(url);
        refresh(res.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch items');
      }
    };

    fetchItems();
  }, [selectedCategory, selectedSize, sortByDateDesc, refresh]);

  const handleEdit = async (item: Item) => {
    try {
      const res = await axios.put(
        `https://my-json-server.typicode.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe--server/items/${item.id}`,
        item
      );
      refresh((prevItems) => {
        const index = prevItems.findIndex((i) => i.id === item.id);
        const newItems = [...prevItems];
        newItems[index] = res.data;
        return newItems;
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred while editing the item.');
    }
    resetFilters();
    setOpenEditModal(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe--server/items/${deleteId}`
      );
      refresh((prevItems) => prevItems.filter((i) => i.id !== deleteId));
      setOpenDeleteModal(false);
      setDeleteId('');
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the item.');
    }
  };

  return (
    <>
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        sizes={sizes}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            List
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Your wardrobe items.
              <span className="block mt-1 text-xs text-gray-400 dark:text-gray-500">
                {items.length} items
              </span>
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Purchase Date
                  <button onClick={() => setSortByDateDesc(!sortByDateDesc)}>
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <WardrobeListItem
                key={item.id}
                item={item}
                categories={categories}
                sizes={sizes}
                setItemDetails={(item: Item) => setItemDetails(item)}
                setOpenDetailsModal={setOpenDetailsModal}
                setOpenEditModal={setOpenEditModal}
                setDeleteId={setDeleteId}
                setOpenDeleteModal={setOpenDeleteModal}
              />
            ))}
            {items.length === 0 && (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td colSpan={7} className="px-6 py-4 text-center">
                  No items found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <DetailsModal
        openModal={openDetailsModal}
        setOpenModal={setOpenDetailsModal}
        item={itemDetails}
        categories={categories}
        sizes={sizes}
      />
      <EditModal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        item={itemDetails}
        categories={categories}
        sizes={sizes}
        handleEdit={handleEdit}
      />
      <DeleteModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default WardrobeList;
