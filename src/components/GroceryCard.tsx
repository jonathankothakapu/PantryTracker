import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { GroceryItem } from '../types';
import { categories } from '../data/categories';

interface GroceryCardProps {
  item: GroceryItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onDelete: (id: string) => void;
}

export const GroceryCard: React.FC<GroceryCardProps> = ({ item, onUpdateQuantity, onDelete }) => {
  const category = categories.find(c => c.id === item.category);
  
  const getStockStatus = () => {
    if (item.quantity === 0) return { 
      status: 'out', 
      color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200', 
      textColor: 'text-red-800',
      shadow: 'shadow-red-100'
    };
    if (item.quantity <= item.lowStockThreshold) return { 
      status: 'low', 
      color: 'bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200', 
      textColor: 'text-amber-800',
      shadow: 'shadow-amber-100'
    };
    return { 
      status: 'good', 
      color: 'bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200', 
      textColor: 'text-emerald-800',
      shadow: 'shadow-emerald-100'
    };
  };

  const stockStatus = getStockStatus();

  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 0) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className={`${stockStatus.color} border-2 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${stockStatus.shadow}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 text-lg mb-2">{item.name}</h3>
          {category && (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${category.color} shadow-sm`}>
              <span className="text-sm">{category.icon}</span>
              {category.name}
            </span>
          )}
        </div>
        <button
          onClick={() => onDelete(item.id)}
          className="text-slate-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-white/50 rounded-lg"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecrement}
            disabled={item.quantity === 0}
            className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="w-4 h-4 text-slate-600" />
          </button>
          
          <span className="text-3xl font-bold text-slate-900 min-w-[4rem] text-center">
            {item.quantity}
          </span>
          
          <button
            onClick={handleIncrement}
            className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <Plus className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="text-right">
          <div className={`text-sm font-bold ${stockStatus.textColor}`}>
            {stockStatus.status === 'out' && 'Out of Stock'}
            {stockStatus.status === 'low' && 'Low Stock'}
            {stockStatus.status === 'good' && 'In Stock'}
          </div>
          {item.quantity <= item.lowStockThreshold && item.quantity > 0 && (
            <div className="text-xs text-amber-700 mt-1 font-medium">
              Only {item.quantity} left
            </div>
          )}
        </div>
      </div>
    </div>
  );
};