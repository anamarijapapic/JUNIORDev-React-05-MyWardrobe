import { Modal } from 'flowbite-react';
import { Item, Category, Size } from '../../types';

const DetailsModal = ({
  openModal,
  setOpenModal,
  item,
  categories,
  sizes,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: Item;
  categories: Category[];
  sizes: Size[];
}) => {
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        {item && (
          <div className="text-center dark:text-white">
            <h3 className="mb-5 text-2xl font-bold uppercase">{item.name}</h3>
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-1/2 mx-auto" />
            ) : (
              <div className="w-1/2 mx-auto bg-gray-300 h-40 flex items-center justify-center">
                <p className="text-center dark:text-gray-900">No Image</p>
              </div>
            )}
            <ul className="mt-5">
              <li className="font-bold text-xl flex align-center justify-center">
                {
                  categories.find((category) => category.id === item.categoryId)
                    ?.name
                }
                {' | '}
                {sizes.find((size) => size.id === item.sizeId)?.name}
                {' | '}
                <div
                  className="mx-2 w-7 h-7 shadow-md rounded-lg inline-block"
                  style={{ backgroundColor: item.color }}
                ></div>
              </li>
              <li>
                <b>Purchased:</b>{' '}
                <span className="text-gray-500">
                  {new Date(item.purchaseDate).toDateString()}
                </span>
              </li>
            </ul>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
