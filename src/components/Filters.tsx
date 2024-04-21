import React from 'react';
import { Label, Select } from 'flowbite-react';
import { Category, Size } from '../types';

interface FiltersProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  categories: Category[];
  selectedSize: string;
  setSelectedSize: (value: string) => void;
  sizes: Size[];
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
  selectedSize,
  setSelectedSize,
  sizes,
}) => (
  <div className="grid grid-cols-6 gap-4 mb-3 text-left items-end">
    <div className="col-start-3 col-span-2">
      <div className="mb-2 block">
        <Label htmlFor="categories" value="Select category" />
      </div>
      <Select
        id="categories"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </div>
    <div className="col-span-2">
      <div className="mb-2 block">
        <Label htmlFor="sizes" value="Select size" />
      </div>
      <Select
        id="sizes"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">All</option>
        {sizes.map((size) => (
          <option key={size.id} value={size.id}>
            {size.name}
          </option>
        ))}
      </Select>
    </div>
  </div>
);

export default Filters;
