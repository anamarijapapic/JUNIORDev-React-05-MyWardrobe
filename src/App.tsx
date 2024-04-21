import { useEffect, useState } from 'react';
import { DarkThemeToggle } from 'flowbite-react';
import axios from 'axios';
import WardrobeList from './components/WardrobeList';
import AddWardrobeItem from './components/AddWardrobeItem';
import { Item } from './types';

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(
        'https://my-json-server.typicode.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe--server/categories'
      ),
      axios.get(
        'https://my-json-server.typicode.com/anamarijapapic/JUNIORDev-React-05-MyWardrobe--server/sizes'
      ),
    ]).then((all) => {
      setCategories(all[0].data);
      setSizes(all[1].data);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen my-0 mx-auto p-8 text-center bg-white dark:bg-gray-900">
        <div className="flex justify-end">
          <DarkThemeToggle />
        </div>
        <h1 className="mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            My
          </span>
          Wardrobe
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <div>
            <AddWardrobeItem
              categories={categories}
              sizes={sizes}
              refresh={setItems as React.Dispatch<React.SetStateAction<Item[]>>}
            />
          </div>
          <div className="md:col-span-2">
            <WardrobeList
              items={items}
              categories={categories}
              sizes={sizes}
              refresh={setItems as React.Dispatch<React.SetStateAction<Item[]>>}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
