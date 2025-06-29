# 🥕 Pantry Tracker

A beautiful, minimalistic grocery inventory management app built with React and TypeScript. Keep track of your groceries, never buy duplicates again, and get notified when items are running low.

![Pantry Tracker Preview](https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 🎯 Core Functionality
- **Smart Inventory Tracking** - Add, update, and remove grocery items with ease
- **Real-time Search** - Instantly find items by name or category
- **Low Stock Alerts** - Get visual warnings when items are running low
- **Category Organization** - Organize items into intuitive categories
- **Persistent Storage** - All data is saved locally in your browser

### 📊 Smart Analytics
- **Dashboard Overview** - See total items, in-stock, low-stock, and out-of-stock counts at a glance
- **Visual Stock Status** - Color-coded cards show stock levels instantly
- **Customizable Thresholds** - Set individual low-stock alerts for each item

### 🎨 Beautiful Design
- **Modern Glass-morphism UI** - Elegant frosted glass effects and gradients
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Delightful micro-interactions and hover effects
- **Accessible Interface** - Clean, readable design with proper contrast

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pantry-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🏗️ Built With

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development for better code quality
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### UI & Icons
- **Lucide React** - Beautiful, customizable SVG icons
- **Custom Glass-morphism** - Hand-crafted frosted glass effects
- **Gradient Design System** - Cohesive color palette and visual hierarchy

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization

## 📱 How to Use

### Adding Items
1. Click the **"Add Item"** button in the header
2. Fill in the item details:
   - **Name**: What you're storing (e.g., "Organic Milk")
   - **Quantity**: How many you have
   - **Category**: Choose from 9 organized categories
   - **Low Stock Alert**: When to warn you (e.g., alert when ≤ 2 remaining)
3. Click **"Add Item"** to save

### Managing Inventory
- **Update Quantities**: Use the `+` and `-` buttons on each card
- **Delete Items**: Click the trash icon to remove items
- **Search**: Use the search bar to quickly find specific items
- **Monitor Status**: Cards change color based on stock levels:
  - 🟢 **Green**: Well stocked
  - 🟡 **Yellow**: Low stock warning
  - 🔴 **Red**: Out of stock

### Categories Available
- 🥕 **Fruits & Vegetables** - Fresh produce
- 🥛 **Dairy** - Milk, cheese, yogurt, etc.
- 🥩 **Meat & Fish** - Proteins and seafood
- 🌾 **Grains** - Rice, pasta, bread, cereals
- 📦 **Packets** - Packaged and processed foods
- 🥫 **Canned Goods** - Preserved and canned items
- 🧃 **Beverages** - Drinks and liquids
- 🍪 **Snacks** - Treats and quick bites
- 🏷️ **Other** - Everything else

## 🎨 Design Philosophy

### Minimalistic & Efficient
- **Clean Interface**: No clutter, just what you need
- **Quick Actions**: Add, update, and find items in seconds
- **Visual Hierarchy**: Important information stands out naturally

### Beautiful & Modern
- **Glass-morphism Effects**: Frosted glass backgrounds with subtle transparency
- **Gradient Accents**: Smooth color transitions for visual appeal
- **Micro-interactions**: Delightful hover effects and smooth animations
- **Responsive Layout**: Looks great on any device size

## 🔧 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # App header with search and add button
│   ├── GroceryCard.tsx # Individual item cards
│   ├── AddItemModal.tsx# Modal for adding new items
│   ├── StatsBar.tsx    # Dashboard statistics
│   └── EmptyState.tsx  # Empty state illustration
├── data/
│   └── categories.ts   # Category definitions and styling
├── hooks/
│   └── useLocalStorage.ts # Local storage management
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🚀 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint code analysis

## 🌟 Key Features Explained

### Smart Local Storage
All your data is automatically saved to your browser's local storage. No accounts needed, no data sent to servers - everything stays private and local.

### Responsive Design
The app automatically adapts to your screen size:
- **Desktop**: 3-column grid layout with full features
- **Tablet**: 2-column layout optimized for touch
- **Mobile**: Single column with touch-friendly controls

### Accessibility
- High contrast ratios for readability
- Keyboard navigation support
- Screen reader friendly structure
- Clear visual feedback for all actions

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Improve documentation
- Enhance the design

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Pexels** - For beautiful stock photos
- **Lucide** - For the amazing icon library
- **Tailwind CSS** - For the utility-first CSS framework
- **React Team** - For the incredible React library

---

**Made with ❤️ for better grocery management**

*Never forget what's in your pantry again!*