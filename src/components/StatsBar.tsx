import React from 'react';
import { GroceryItem } from '../types';

interface StatsBarProps {
  items: GroceryItem[];
}

export const StatsBar: React.FC<StatsBarProps> = ({ items }) => {
  const totalItems = items.length;
  const lowStockItems = items.filter(item => item.quantity <= item.lowStockThreshold && item.quantity > 0).length;
  const outOfStockItems = items.filter(item => item.quantity === 0).length;
  const inStockItems = items.filter(item => item.quantity > item.lowStockThreshold).length;

  if (totalItems === 0) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 mb-8 shadow-lg">
      <div className="grid grid-cols-4 gap-6 text-center">
        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-3xl font-bold text-slate-800">{totalItems}</div>
          <div className="text-sm text-slate-600 font-medium mt-1">Total Items</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-green-100">
          <div className="text-3xl font-bold text-emerald-700">{inStockItems}</div>
          <div className="text-sm text-emerald-600 font-medium mt-1">In Stock</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100">
          <div className="text-3xl font-bold text-amber-700">{lowStockItems}</div>
          <div className="text-sm text-amber-600 font-medium mt-1">Low Stock</div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100">
          <div className="text-3xl font-bold text-red-700">{outOfStockItems}</div>
          <div className="text-sm text-red-600 font-medium mt-1">Out of Stock</div>
        </div>
      </div>
    </div>
  );
};