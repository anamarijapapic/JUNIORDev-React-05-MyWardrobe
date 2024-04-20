import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Category, Size } from '../types';
import InputForm from './InputForm';

const AddWardrobeItem = ({
  categories,
  sizes,
  refresh,
}: {
  categories: Category[];
  sizes: Size[];
  refresh: React.Dispatch<React.SetStateAction<never[]>>;
}) => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [sizeId, setSizeId] = useState('');
  const [color, setColor] = useState('#000000');
  const [image, setImage] = useState('');
  const [purchaseDate, setPurchaseDate] = useState(new Date());

  useEffect(() => {
    if (categories) {
      setCategoryId(categories[0]?.id);
    }
    if (sizes) {
      setSizeId(sizes[0]?.id);
    }
  }, [categories, sizes]);

  const resetForm = () => {
    setName('');
    setCategoryId('');
    setSizeId('');
    setColor('#000000');
    setImage('');
    setPurchaseDate(new Date());
  };

  const handleCreate = async (item: {
    name: string;
    categoryId: string;
    sizeId: string;
    color: string;
    image: string;
    purchaseDate: Date;
  }) => {
    try {
      await axios.post(`http://localhost:3001/items`, item);
      const res = await axios.get(
        `http://localhost:3001/items?_sort=-purchaseDate`
      );
      refresh(res.data);
      resetForm();
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the item.');
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newItem = {
      name,
      categoryId,
      sizeId,
      color,
      image,
      purchaseDate,
    };
    handleCreate(newItem);
  };

  return (
    <Card className="w-full mb-10">
      <p className="my-4 text-lg text-left text-gray-900 dark:text-white">
        Add a new wardrobe item.
      </p>
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
        submitText="Add item"
      />
    </Card>
  );
};

export default AddWardrobeItem;
