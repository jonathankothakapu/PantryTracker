import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

interface EmptyStateProps {
  onAddItem: () => void;
  isSearching?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onAddItem, isSearching = false }) => {
  if (isSearching) {
    return (
      <div className="text-center py-16">
        <div className="text-slate-400 mb-6">
          <ShoppingCart className="w-20 h-20 mx-auto" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">No items found</h3>
        <p className="text-slate-600 max-w-md mx-auto">Try searching for something else or add a new item to your pantry.</p>
      </div>
    );
  }

  return (
    <div className="text-center py-20">
      <div className="text-slate-400 mb-8">
        <ShoppingCart className="w-24 h-24 mx-auto" />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Your pantry is empty</h3>
      <p className="text-slate-600 mb-10 max-w-md mx-auto leading-relaxed">
        Start tracking your groceries by adding items to your pantry. Never forget what you have at home again!
      </p>
      <button
        onClick={onAddItem}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <Plus className="w-5 h-5" />
        Add Your First Item
      </button>
    </div>
  );
};