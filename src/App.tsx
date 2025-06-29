import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { GroceryCard } from './components/GroceryCard';
import { AddItemModal } from './components/AddItemModal';
import { EmptyState } from './components/EmptyState';
import { StatsBar } from './components/StatsBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import { GroceryItem } from './types';

function App() {
  const [items, setItems] = useLocalStorage<GroceryItem[]>('pantry-items', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  const handleAddItem = (name: string, quantity: number, category: string, lowStockThreshold: number) => {
    const newItem: GroceryItem = {
      id: Date.now().toString(),
      name,
      quantity,
      category,
      lowStockThreshold,
      addedDate: new Date().toISOString(),
    };
    setItems(prev => [...prev, newItem]);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddItem={() => setIsAddModalOpen(true)}
      />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <StatsBar items={items} />

        {filteredItems.length === 0 ? (
          <EmptyState 
            onAddItem={() => setIsAddModalOpen(true)} 
            isSearching={searchTerm.length > 0}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map(item => (
              <GroceryCard
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        )}
      </main>

      <AddItemModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddItem}
      />
    </div>
  );
}

export default App;