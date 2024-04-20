import { useEffect, useState } from 'react';
import { Modal } from 'flowbite-react';
import { Item, Category, Size } from '../../types';
import InputForm from '../InputForm';

const EditModal = ({
  openModal,
  setOpenModal,
  item,
  categories,
  sizes,
  handleEdit,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: Item | null;
  categories: Category[];
  sizes: Size[];
  handleEdit: (item: Item) => void;
}) => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [sizeId, setSizeId] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date());

  useEffect(() => {
    if (item) {
      setName(item.name);
      setCategoryId(item.categoryId);
      setSizeId(item.sizeId);
      setColor(item.color);
      setImage(item.image);
      setPurchaseDate(new Date(item.purchaseDate));
    }
  }, [item]);

  const resetForm = () => {
    setName('');
    setCategoryId('');
    setSizeId('');
    setColor('#000000');
    setImage('');
    setPurchaseDate(new Date());
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!item) return;
    handleEdit({
      id: item.id,
      name,
      categoryId,
      sizeId,
      color,
      image,
      purchaseDate,
    });
    resetForm();
  };

  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <InputForm
          name={name}
          setName={setName}
          image={image}
          setImage={setImage}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          categories={categories}
          sizeId={sizeId}
          setSizeId={setSizeId}
          sizes={sizes}
          color={color}
          setColor={setColor}
          purchaseDate={purchaseDate}
          setPurchaseDate={setPurchaseDate}
          handleSubmit={handleSubmit}
          submitText="Save changes"
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
