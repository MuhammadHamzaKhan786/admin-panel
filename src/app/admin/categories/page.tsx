
"use client";


// import { useEffect, useState } from "react";
// import {
  
//   FaBoxOpen,
//   FaDollarSign,
// } from "react-icons/fa";

// Add type definition for CategoryTheme
// type CategoryTheme = {
//   icon: JSX.Element;
//   bg: string;
//   progress: string;
// };

// // Define valid category keys as a type
// type CategoryKey = "chairs" | "cutlery" | "tables" | "decoration" | "default";
// // Move the ThemedIcon component outside the main component
// const ThemedIcon = ({
//   icon: Icon,
//   className,
// }: {
//   icon: React.ElementType;
//   className?: string;
// }) => <Icon className={className || ""} />;
// const Categories = () => {
//   const [products] = useAtom(data);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalStock, setTotalStock] = useState(0);
//   const [categoryWiseAmount, setCategoryWiseAmount] = useState<any>({});

//   // Update categoryThemes with type annotation
//   const categoryThemes: Record<CategoryKey, CategoryTheme> = {
//     chairs: {
//       icon: <ThemedIcon icon={FaChair} className="w-8 h-8 text-teal-600" />,
//       bg: "bg-teal-50",
//       progress: "bg-gradient-to-r from-teal-400 to-emerald-400",
//     },
//     cutlery: {
//       icon: <ThemedIcon icon={FaUtensils} className="w-8 h-8 text-blue-600" />,
//       bg: "bg-blue-50",
//       progress: "bg-gradient-to-r from-blue-400 to-cyan-400",
//     },
//     tables: {
//       icon: <ThemedIcon icon={FaTable} className="w-8 h-8 text-amber-600" />,
//       bg: "bg-amber-50",
//       progress: "bg-gradient-to-r from-amber-400 to-orange-400",
//     },
//     decoration: {
//       icon: <ThemedIcon icon={FaLightbulb} className="w-8 h-8 text-pink-600" />,
//       bg: "bg-pink-50",
//       progress: "bg-gradient-to-r from-pink-400 to-rose-400",
//     },
//     default: {
//       icon: <ThemedIcon icon={FaBoxOpen} className="w-8 h-8 text-gray-600" />,
//       bg: "bg-gray-50",
//       progress: "bg-gradient-to-r from-gray-400 to-slate-400",
//     },
//   };

//   useEffect(() => {
//     let total = 0;
//     let totalQuantity = 0;
//     let categoryAmounts: { [key: string]: number } = {};

//     products.forEach((product) => {
//       total += product.stock * product.price;
//       totalQuantity += product.stock;

//       if (categoryAmounts[product.categoryName]) {
//         categoryAmounts[product.categoryName] += product.stock * product.price;
//       } else {
//         categoryAmounts[product.categoryName] = product.stock * product.price;
//       }
//     });

//     setTotalAmount(total);
//     setTotalStock(totalQuantity);
//     setCategoryWiseAmount(categoryAmounts);
//   }, [products]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col items-center p-6 md:ml-64">
//       <div className="w-full max-w-6xl space-y-8 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
//             Inventory Analytics
//             <span className="ml-4 text-2xl">📊</span>
//           </h1>
//           <div className="flex justify-center gap-8 flex-wrap">
//             <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-6 rounded-2xl shadow-lg flex items-center gap-4 backdrop-blur-sm">
//               <div className="p-3 bg-white/20 rounded-full">
//                 <ThemedIcon
//                   icon={FaDollarSign}
//                   className="w-8 h-8 text-white"
//                 />
//               </div>
//               <div>
//                 <p className="text-sm text-white/80">Total Portfolio Value</p>
//                 <p className="text-2xl font-bold text-white">
//                   €
//                   {totalAmount.toLocaleString(undefined, {
//                     maximumFractionDigits: 2,
//                   })}
//                 </p>
//               </div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl shadow-lg flex items-center gap-4 backdrop-blur-sm">
//               <div className="p-3 bg-white/20 rounded-full">
//                 <ThemedIcon icon={FaBoxOpen} className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm text-white/80">Total Inventory Units</p>
//                 <p className="text-2xl font-bold text-white">
//                   {totalStock.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Category Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.entries(categoryWiseAmount).map(([category, amount]) => {
//             // Update the theme access with type safety
//             const theme =
//               categoryThemes[category.toLowerCase() as CategoryKey] ||
//               categoryThemes.default;
//             const percentage = (
//               ((amount as number) / totalAmount) *
//               100
//             ).toFixed(1);

//             return (
//               <div
//                 key={category}
//                 className={`${theme.bg} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group`}>
//                 <div className="flex items-start justify-between">
//                   <div className="p-2 rounded-lg bg-white/20">{theme.icon}</div>
//                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30">
//                     <span className="text-sm font-semibold text-gray-700">
//                       {percentage}%
//                     </span>
//                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">
//                   {category.toUpperCase()}
//                 </h3>
//                 <p className="text-2xl font-bold text-gray-700 mb-4">
//                   $
//                   {(amount as number).toLocaleString(undefined, {
//                     maximumFractionDigits: 2,
//                   })}
//                 </p>
//                 <div className="relative">
//                   <div className="w-full bg-white/30 rounded-full h-3">
//                     <div
//                       className={`${theme.progress} h-3 rounded-full transition-all duration-1000 ease-out`}
//                       style={{ width: `${percentage}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty State */}
//         {Object.keys(categoryWiseAmount).length === 0 && (
//           <div className="text-center py-12 animate-fade-in">
//             <div className="inline-block p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
//               <div className="animate-bounce-slow">
//                 <ThemedIcon icon={FaBoxOpen} className="w-8 h-8 text-white" />
//               </div>
//               <p className="text-xl font-semibold text-gray-600">
//                 Inventory Dashboard Empty
//               </p>
//               <p className="text-gray-500 mt-2 max-w-md mx-auto">
//                 Add products to unlock powerful inventory insights and visual
//                 analytics
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Categories;












































// import { FaCar, FaBolt } from "react-icons/fa";

// // Define the category themes for car types
// type CategoryTheme = {
//   icon: JSX.Element;
//   bg: string;
//   progress: string;
// };

// // Define valid category keys
// type CategoryKey = "sedan" | "sports" | "truck" | "default";

// // Themed Icon Component
// const ThemedIcon = ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ""} />
// );

// // Car inventory data (Replace with API if needed)
// const carProducts = [
//   { id: 1, name: "Honda Civic", stock: 5, price: 25000, categoryName: "sedan" },
//   { id: 2, name: "Toyota Corolla", stock: 8, price: 22000, categoryName: "sedan" },
//   { id: 3, name: "Ford Mustang", stock: 2, price: 55000, categoryName: "sports" },
//   { id: 4, name: "Lamborghini Huracan", stock: 1, price: 200000, categoryName: "sports" },
//   { id: 5, name: "Ford F-150", stock: 4, price: 35000, categoryName: "truck" },
// ];

// // Category themes with corresponding styles
// const categoryThemes: Record<CategoryKey, CategoryTheme> = {
//   sedan: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-400 to-cyan-400",
//   },
//   sports: {
//     icon: <ThemedIcon Icon={FaBolt} className="w-8 h-8 text-red-600" />,
//     bg: "bg-red-50",
//     progress: "bg-gradient-to-r from-red-400 to-orange-400",
//   },
//   truck: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-green-600" />,
//     bg: "bg-green-50",
//     progress: "bg-gradient-to-r from-green-400 to-emerald-400",
//   },
//   default: {
//     icon: <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-gray-600" />,
//     bg: "bg-gray-50",
//     progress: "bg-gradient-to-r from-gray-400 to-slate-400",
//   },
// };

// const Categories = () => {
//   const [products] = useState(carProducts);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalStock, setTotalStock] = useState(0);
//   const [categoryWiseAmount, setCategoryWiseAmount] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let total = 0;
//     let totalQuantity = 0;
//     let categoryAmounts: Record<string, number> = {};

//     products.forEach((product) => {
//       total += product.stock * product.price;
//       totalQuantity += product.stock;

//       categoryAmounts[product.categoryName] = (categoryAmounts[product.categoryName] || 0) + product.stock * product.price;
//     });

//     setTotalAmount(total);
//     setTotalStock(totalQuantity);
//     setCategoryWiseAmount(categoryAmounts);
//   }, [products]);

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
//       <div className="w-full max-w-6xl space-y-8 py-12 flex flex-row gap-6">
//         {/* Sidebar (Assumed to be on the left side) */}
//          <div className="w-1/4 bg-white p-6 rounded-xl">
          
//         </div> 

//         <div className="flex-1 bg-blue-900 rounded-xl p-6">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-white mb-6">
//               Car Inventory Analytics 🚗
//             </h1>
//             <div className="flex justify-center gap-8 flex-wrap">
//               <div className="bg-gradient-to-br from-blue-500 to-green-500 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaDollarSign} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Inventory Value</p>
//                   <p className="text-2xl font-bold text-white">
//                     ${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-red-500 to-orange-500 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Cars in Inventory</p>
//                   <p className="text-2xl font-bold text-white">{totalStock}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Category Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Object.entries(categoryWiseAmount).map(([category, amount]) => {
//               const theme = categoryThemes[category.toLowerCase() as CategoryKey] || categoryThemes.default;
//               const percentage = totalAmount > 0 ? (((amount as number) / totalAmount) * 100).toFixed(1) : "0";

//               return (
//                 <div key={category} className={`${theme.bg} rounded-2xl shadow-lg p-6`}>
//                   <div className="flex items-start justify-between">
//                     <div className="p-2 rounded-lg bg-white/20">{theme.icon}</div>
//                     <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30">
//                       <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
//                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">{category.toUpperCase()}</h3>
//                   <p className="text-2xl font-bold text-gray-700 mb-4">
//                     ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                   <div className="relative">
//                     <div className="w-full bg-white/30 rounded-full h-3">
//                       <div className={`${theme.progress} h-3 rounded-full`} style={{ width: `${percentage}%` }} />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;





















// import { FaCar, FaBolt, FaBoxOpen,FaDollarSign } from "react-icons/fa";
// // Define the category themes for car types
// type CategoryTheme = {
//   icon: JSX.Element;
//   bg: string;
//   progress: string;
// };

// // Define valid category keys
// type CategoryKey = "sedan" | "sports" | "truck" | "default";

// // Themed Icon Component
// const ThemedIcon = ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ""} />
// );

// // Car inventory data (Replace with API if needed)
// const carProducts = [
//   { id: 1, name: "Honda Civic", stock: 5, price: 25000, categoryName: "sedan" },
//   { id: 2, name: "Toyota Corolla", stock: 8, price: 22000, categoryName: "sedan" },
//   { id: 3, name: "Ford Mustang", stock: 2, price: 55000, categoryName: "sports" },
//   { id: 4, name: "Lamborghini Huracan", stock: 1, price: 200000, categoryName: "sports" },
//   { id: 5, name: "Ford F-150", stock: 4, price: 35000, categoryName: "truck" },
// ];

// // Category themes with corresponding styles
// const categoryThemes: Record<CategoryKey, CategoryTheme> = {
//   sedan: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   sports: {
//     icon: <ThemedIcon Icon={FaBolt} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   truck: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   default: {
//     icon: <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-gray-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
// };

// const Categories = () => {
//   const [products] = useState(carProducts);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalStock, setTotalStock] = useState(0);
//   const [categoryWiseAmount, setCategoryWiseAmount] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let total = 0;
//     let totalQuantity = 0;
//     let categoryAmounts: Record<string, number> = {};

//     products.forEach((product) => {
//       total += product.stock * product.price;
//       totalQuantity += product.stock;

//       categoryAmounts[product.categoryName] = (categoryAmounts[product.categoryName] || 0) + product.stock * product.price;
//     });

//     setTotalAmount(total);
//     setTotalStock(totalQuantity);
//     setCategoryWiseAmount(categoryAmounts);
//   }, [products]);

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
//       <div className="w-full max-w-6xl space-y-8 py-12 flex flex-row gap-6">
//         {/* Sidebar (Assumed to be on the left side) */}
//         <div className="w-1/4 bg-white p-6 rounded-xl hidden sm:block">
//           {/* Sidebar Content */}
//         </div> 

//         <div className="flex-1 bg-white border-2 border-gray-950 rounded-xl p-6">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-white mb-6">
//               Car Inventory Analytics 🚗
//             </h1>
//             <div className="flex justify-center gap-8 flex-wrap">
//               <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaDollarSign} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Inventory Value</p>
//                   <p className="text-2xl font-bold text-white">
//                     ${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Cars in Inventory</p>
//                   <p className="text-2xl font-bold text-white">{totalStock}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Category Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {Object.entries(categoryWiseAmount).map(([category, amount]) => {
//               const theme = categoryThemes[category.toLowerCase() as CategoryKey] || categoryThemes.default;
//               const percentage = totalAmount > 0 ? (((amount as number) / totalAmount) * 100).toFixed(1) : "0";

//               return (
//                 <div key={category} className={`${theme.bg} rounded-2xl  shadow-lg p-6`}>
//                   <div className="flex items-start justify-between">
//                     <div className="p-2 rounded-lg bg-white/20 border-black">{theme.icon}</div>
//                     <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30">
//                       <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
//                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">{category.toUpperCase()}</h3>
//                   <p className="text-2xl font-bold text-gray-700 mb-4">
//                     ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                   <div className="relative">
//                     <div className="w-full bg-white/30 rounded-full h-3">
//                       <div className={`${theme.progress} h-3 rounded-full`} style={{ width: `${percentage}%` }} />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;




























// import { FaCar, FaBolt, FaBoxOpen, FaDollarSign } from "react-icons/fa";
// import { useState, useEffect } from "react";

// // Define the category themes for car types
// type CategoryTheme = {
//   icon: JSX.Element;
//   bg: string;
//   progress: string;
// };

// // Define valid category keys
// type CategoryKey = "sedan" | "sports" | "truck" | "default";

// // Themed Icon Component
// const ThemedIcon = ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ""} />
// );

// // Car inventory data (Replace with API if needed)
// const carProducts = [
//   { id: 1, name: "Honda Civic", stock: 5, price: 25000, categoryName: "sedan" },
//   { id: 2, name: "Toyota Corolla", stock: 8, price: 22000, categoryName: "sedan" },
//   { id: 3, name: "Ford Mustang", stock: 2, price: 55000, categoryName: "sports" },
//   { id: 4, name: "Lamborghini Huracan", stock: 1, price: 200000, categoryName: "sports" },
//   { id: 5, name: "Ford F-150", stock: 4, price: 35000, categoryName: "truck" },
// ];

// // Category themes with corresponding styles
// const categoryThemes: Record<CategoryKey, CategoryTheme> = {
//   sedan: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   sports: {
//     icon: <ThemedIcon Icon={FaBolt} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   truck: {
//     icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
//   default: {
//     icon: <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-gray-600" />,
//     bg: "bg-blue-50",
//     progress: "bg-gradient-to-r from-blue-600 to-blue-300",
//   },
// };

// const Categories = () => {
//   const [products] = useState(carProducts);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalStock, setTotalStock] = useState(0);
//   const [categoryWiseAmount, setCategoryWiseAmount] = useState<Record<string, number>>({});

//   useEffect(() => {
//     let total = 0;
//     let totalQuantity = 0;
//     let categoryAmounts: Record<string, number> = {};

//     products.forEach((product) => {
//       total += product.stock * product.price;
//       totalQuantity += product.stock;

//       categoryAmounts[product.categoryName] = (categoryAmounts[product.categoryName] || 0) + product.stock * product.price;
//     });

//     setTotalAmount(total);
//     setTotalStock(totalQuantity);
//     setCategoryWiseAmount(categoryAmounts);
//   }, [products]);

//   return (
//     <div className="min-h-screen bg-white text-black flex flex-col items-center p-6">
//       <div className="w-full max-w-6xl space-y-8 py-12 flex flex-row gap-6">
//         {/* Sidebar (Assumed to be on the left side) */}
//         <div className="w-1/4 bg-white p-6 rounded-xl hidden sm:block">
//           {/* Sidebar Content */}
//         </div> 

//         <div className="flex-1 bg-white border-2 border-gray-950 rounded-xl p-6">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-white mb-6">
//               Car Inventory Analytics 🚗
//             </h1>
//             <div className="flex justify-center gap-8 flex-wrap">
//               <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaDollarSign} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Inventory Value</p>
//                   <p className="text-2xl font-bold text-white">
//                     ${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl shadow-lg flex items-center gap-4">
//                 <div className="p-3 bg-white/20 rounded-full">
//                   <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-white/80">Total Cars in Inventory</p>
//                   <p className="text-2xl font-bold text-white">{totalStock}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Category Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {Object.entries(categoryWiseAmount).map(([category, amount]) => {
//               const categoryKey = category.toLowerCase() as CategoryKey;
//               const theme = categoryThemes[categoryKey] || categoryThemes.default;
//               const percentage = totalAmount > 0 ? (((amount as number) / totalAmount) * 100).toFixed(1) : "0";

//               return (
//                 <div key={category} className={`${theme.bg} rounded-2xl  shadow-lg p-6`}>
//                   <div className="flex items-start justify-between">
//                     <div className="p-2 rounded-lg bg-white/20 border-black">{theme.icon}</div>
//                     <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30">
//                       <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
//                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">{category.toUpperCase()}</h3>
//                   <p className="text-2xl font-bold text-gray-700 mb-4">
//                     ${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//                   </p>
//                   <div className="relative">
//                     <div className="w-full bg-white/30 rounded-full h-3">
//                       <div className={`${theme.progress} h-3 rounded-full`} style={{ width: `${percentage}%` }} />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;






























import { FaCar, FaBolt, FaBoxOpen, FaDollarSign } from "react-icons/fa";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type CategoryTheme = {
  icon: React.ReactNode;
  bg: string;
  progress: string;
};

type CategoryKey = "sedan" | "sports" | "truck" | "electric" | "default";

const ThemedIcon = ({ Icon, className }: { Icon: React.ElementType; className?: string }) => (
  <Icon className={className || ""} />
);

const carProducts = [
  { _id: "1", name: "Audi A6", model: "2020", price: "$21,000", stock: 2, category: "sedan" },
  { _id: "2", name: "Rolls-Royce", model: "2023", price: "$59,000", stock: 6, category: "sedan" },
  { _id: "3", name: "Mustang", model: "2021", price: "$29,000", stock: 4, category: "sports" },
  { _id: "4", name: "Tesla Model 3", model: "2025", price: "$70,000", stock: 1, category: "electric" },
];

const categoryThemes: Record<CategoryKey, CategoryTheme> = {
  sedan: {
    icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50",
    progress: "bg-gradient-to-r from-blue-600 to-blue-300",
  },
  sports: {
    icon: <ThemedIcon Icon={FaBolt} className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50",
    progress: "bg-gradient-to-r from-blue-600 to-blue-300",
  },
  truck: {
    icon: <ThemedIcon Icon={FaCar} className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50",
    progress: "bg-gradient-to-r from-blue-600 to-blue-300",
  },
  electric: {
    icon: <ThemedIcon Icon={FaBolt} className="w-8 h-8 text-green-600" />,
    bg: "bg-green-50",
    progress: "bg-gradient-to-r from-green-600 to-green-300",
  },
  default: {
    icon: <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-gray-600" />,
    bg: "bg-blue-50",
    progress: "bg-gradient-to-r from-blue-600 to-blue-300",
  },
};

const chartData = [
  { month: "Feb", rentsProfit: 5000, salesProfit: 500 },
  { month: "Mar", rentsProfit: 2500, salesProfit: 800 },
  { month: "Apr", rentsProfit: 1300, salesProfit: 900 },
  { month: "May", rentsProfit: 1400, salesProfit: 300 },
  { month: "Jun", rentsProfit: 600, salesProfit: 500 },
  { month: "Jul", rentsProfit: 900, salesProfit: 100 },
  { month: "Aug", rentsProfit: 700, salesProfit: 400 },
];

const Categories = () => {
  const [products] = useState(carProducts);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [categoryWiseAmount, setCategoryWiseAmount] = useState<Record<string, number>>({});

  useEffect(() => {
    let total = 0;
    let totalQuantity = 0;
    const categoryAmounts: Record<string, number> = {};

    products.forEach((product) => {
      // Convert price to number by removing `$` and commas
      const price = parseFloat(product.price.replace(/[$,]/g, ""));
      total += product.stock * price;
      totalQuantity += product.stock;

      categoryAmounts[product.category] = (categoryAmounts[product.category] || 0) + product.stock * price;
    });

    setTotalAmount(total);
    setTotalStock(totalQuantity);
    setCategoryWiseAmount(categoryAmounts);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-900 text-black flex flex-col items-center p-6">
      <div className="w-full max-w-4xl space-y-8 py-10 flex flex-row gap-15 justify-center pl-10">
        <div className="flex-1 bg-white border-2 border-gray-950 rounded-xl p-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-6">Car Inventory Analytics 🚗</h1>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <ThemedIcon Icon={FaDollarSign} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Total Inventory Value</p>
                  <p className="text-2xl font-bold text-white">${totalAmount.toLocaleString()}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-6 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <ThemedIcon Icon={FaBoxOpen} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Total Cars in Inventory</p>
                  <p className="text-2xl font-bold text-white">{totalStock}</p>
                </div>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rentsProfit" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="salesProfit" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {Object.entries(categoryWiseAmount).map(([category, amount]) => {
              const categoryKey = category.toLowerCase() as CategoryKey;
              const theme = categoryThemes[categoryKey] || categoryThemes.default;
              const percentage = totalAmount > 0 ? (((amount as number) / totalAmount) * 100).toFixed(1) : "0";

              return (
                <div key={category} className={`${theme.bg} rounded-2xl shadow-lg p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-gray-200 border-black">{theme.icon}</div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-30">
                      <span className="text-sm font-semibold text-gray-700">{percentage}%</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">{category.toUpperCase()}</h3>
                  <p className="text-2xl font-bold text-gray-700 mb-4">${amount.toLocaleString()}</p>
                  <div className="relative">
                    <div className="w-full bg-gray-30 rounded-full h-3">
                      <div className={`${theme.progress} h-3 rounded-full`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
