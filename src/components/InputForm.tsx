import React from 'react';
import { TextInput, Select, Label, Datepicker, Button } from 'flowbite-react';
import { Category, Size } from '../types';

interface InputFormProps {
  name: string;
  setName: (value: string) => void;
  image: string;
  setImage: (value: string) => void;
  categoryId: string;
  setCategoryId: (value: string) => void;
  categories: Category[];
  sizeId: string;
  setSizeId: (value: string) => void;
  sizes: Size[];
  color: string;
  setColor: (value: string) => void;
  purchaseDate: Date;
  setPurchaseDate: (date: Date) => void;
  handleSubmit: (event: React.FormEvent) => void;
  submitText: string;
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  setName,
  image,
  setImage,
  categoryId,
  setCategoryId,
  categories,
  sizeId,
  setSizeId,
  sizes,
  color,
  setColor,
  purchaseDate,
  setPurchaseDate,
  handleSubmit,
  submitText,
}) => {
  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          id="name"
          type="text"
          sizing="lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <TextInput
          id="image"
          type="text"
          sizing="sm"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <div className="mb-2 block text-left">
          <Label htmlFor="categories" value="Select category" />
        </div>
        <Select
          id="categories"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <div className="mb-2 block text-left">
          <Label htmlFor="sizes" value="Select size" />
        </div>
        <Select
          id="sizes"
          value={sizeId}
          onChange={(e) => setSizeId(e.target.value)}
          required
        >
          {sizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.name}
            </option>
          ))}
        </Select>
        <div className="block text-left">
          <Label htmlFor="color" value="Color" />
        </div>
        <input
          type="color"
          className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
          id="color"
          value={color}
          title="Choose your color"
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <div className="block text-left">
          <Label htmlFor="date" value="Select purchase date" />
        </div>
        <Datepicker
          id="date"
          name="purchaseDate"
          maxDate={new Date()}
          value={purchaseDate.toDateString()}
          onSelectedDateChanged={(date) => setPurchaseDate(date)}
        />
        <Button type="submit" className="text-xs font-bold uppercase">
          {submitText}
        </Button>
      </form>
    </>
  );
};

export default InputForm;
