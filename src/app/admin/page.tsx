// "use client";

// import { useEffect, useState } from "react";
// import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import CarAnalyticsGraph from "@/components/CarAnalytics";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
// 	<Icon className={className || ''} />
//   );
// export default function Dashboard() {
//   const [totalProducts, setTotalProducts] = useState<number>(0);
//   const [totalStock, setTotalStock] = useState<number>(0);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [totalOrders, setTotalOrders] = useState<number>(0);
//   const [completedOrders, setCompletedOrders] = useState<number>(0);
//   const [pendingOrders, setPendingOrders] = useState<number>(0);
//   const [deliveredOrders, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           priceperday,
//           fuelCapicity,
//         }`;

//         const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 98)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [totalProducts, totalStock, totalAmount, totalOrders, completedOrders, pendingOrders, deliveredOrders]);


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:ml-64">
     

//       <h1 className="text-4xl font-bold text-gray-800 mb-8 font-[Poppins]">Business Overview</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {/* Total Products Card */}
//         <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Products</p>
//               <p className="text-3xl font-bold text-white">{totalProducts}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon icon={FaBox} className="text-3xl text-white" />
               
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Stock Card */}
//         <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Stock</p>
//               <p className="text-3xl font-bold text-white">{totalStock}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon  
//               icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Amount Card */}
//         <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Sales</p>
//               <p className="text-3xl font-bold text-white">${totalAmount.toLocaleString('en-US')}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaMoneyBillWave} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Orders Card */}
//         <div className="bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Orders</p>
//               <p className="text-3xl font-bold text-white">{totalOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaUsers} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Delivered Orders Card */}
//         <div className="bg-gradient-to-br from-green-500 to-lime-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Delivered</p>
//               <p className="text-3xl font-bold text-white">{deliveredOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Pending Orders Card */}
//         <div className="bg-gradient-to-br from-rose-500 to-pink-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Pending</p>
//               <p className="text-3xl font-bold text-white">{pendingOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>

//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//       </div>   <br /><br />
              
         
//          <CarAnalyticsGraph/>
         
       
//     </div>
//   );
// }












// "use client";

// import { useEffect, useState } from "react";
// import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import CarAnalyticsGraph from "@/components/CarAnalytics";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ''} />
// );

// export default function Dashboard() {
//   const [totalProducts, setTotalProducts] = useState<number>(0);
//   const [totalStock, setTotalStock] = useState<number>(0);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [totalOrders, setTotalOrders] = useState<number>(0);
//   const [completedOrders, setCompletedOrders] = useState<number>(0);
//   const [pendingOrders, setPendingOrders] = useState<number>(0);
//   const [deliveredOrders, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           priceperday,
//           fuelCapicity,
//         }`;

//         const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 9876)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [totalProducts, totalStock, totalAmount, totalOrders, completedOrders, pendingOrders, deliveredOrders]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 md:ml-64">
//       <h1 className="text-4xl font-bold text-gray-800 mb-8 font-[Poppins]">Business Overview</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {/* Total Products Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Total Products</p>
//               <p className="text-3xl font-bold text-gray-800">{totalProducts}</p>
//             </div>
//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaBox} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>

//         {/* Total Stock Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Total Stock</p>
//               <p className="text-3xl font-bold text-gray-800">{8488}</p>
//             </div>
//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>

//         {/* Total Amount Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Total Sales</p>
//               {/* <p className="text-3xl font-bold text-gray-800">${totalAmount.toLocaleString('en-US')}</p> */}
//               <p className="text-3xl font-bold text-gray-800">${65}</p>
//             </div>

//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaMoneyBillWave} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>

//         {/* Total Orders Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Total Orders</p>
//               <p className="text-3xl font-bold text-gray-800">{5}</p>
//             </div>
//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaUsers} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>

//         {/* Delivered Orders Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Delivered</p>
//               <p className="text-3xl font-bold text-gray-800">{5}</p>
//             </div>
//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>

//         {/* Pending Orders Card */}
//         <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-800 font-medium mb-1">Pending</p>
//               <p className="text-3xl font-bold text-gray-800">{3}</p>
//             </div>
//             <div className="bg-white p-4 rounded-full">
//               <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <br />
//       <CarAnalyticsGraph />
//     </div>
//   );
// }




























// "use client";

// import { useEffect, useState } from "react";
// import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import CarAnalyticsGraph from "@/components/CarAnalytics";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
//   <Icon className={className || ''} />
// );

// export default function Dashboard() {
//   const [totalProducts, setTotalProducts] = useState<number>(0);
//   const [, setTotalStock] = useState<number>(0);
//   const [, setTotalAmount] = useState<number>(0);
//   const [, setTotalOrders] = useState<number>(0);
//   const [, setCompletedOrders] = useState<number>(0);
//   const [, setPendingOrders] = useState<number>(0);
//   const [, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           priceperday,
//           fuelCapicity,
//         }`;

//         const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 9876)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white p-6 md:ml-64">
//       <h1 className="text-4xl font-bold text-black mb-8 font-[Poppins]">Business Overview</h1>

//       <div className="bg-blue-900 rounded-xl p-8 shadow-lg relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

//           {/* Total Products Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1">Total Products</p>
//               <p className="text-3xl font-bold text-black">{totalProducts}</p>
//             </div>
//             <div className="bg-blue-600 p-4 rounded-full">
//               <ThemedIcon icon={FaBox} className="text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Stock Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1">Total Stock</p>
//               <p className="text-3xl font-bold text-black">{8488}</p>
//             </div>
//             <div className="bg-blue-600 p-4 rounded-full">
//               <ThemedIcon icon={FaShoppingCart} className="text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Amount Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1">Total Sales</p>
//               {/* <p className="text-3xl font-bold text-black">${totalAmount.toLocaleString('en-US')}6544</p> */}
//               <p className="text-3xl font-bold text-black">${7654}</p>
//             </div>
//             <div className="bg-blue-600 p-4 rounded-full">
//               <ThemedIcon icon={FaMoneyBillWave} className="text-3xl text-white" />
//             </div>
//           </div>

//           {/* Total Orders Card */}
//           <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 flex items-center justify-between">
//             <div>
//               <p className="text-black font-medium mb-1">Total Orders</p>
//               <p className="text-3xl font-bold text-black">{70}</p>
//             </div>
//             <div className="bg-blue-600 p-4 rounded-full">
//               <ThemedIcon icon={FaUsers} className="text-3xl text-white" />
//             </div>
//           </div>

//         </div>

//         <br />
//         <CarAnalyticsGraph />
//       </div>
//     </div>
//   );
// }


























"use client";

import { useEffect, useState } from "react";
import {
  FaTachometerAlt,
  FaCar,
  FaClipboardCheck,
  FaCarSide,
} from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ''} />
);

export default function Dashboard() {
  const [totalCars, setTotalCars] = useState<number>(0);
  const [carsOnRent, setCarsOnRent] = useState<number>(0);
  const [availableCars, setAvailableCars] = useState<number>(0);
  const [chartData, setChartData] = useState(
    [
      { month: "May", earnings: 200000, previousEarnings: 150000 },
      { month: "Jun", earnings: 250000, previousEarnings: 200000 },
      { month: "Jul", earnings: 230000, previousEarnings: 210000 },
      { month: "Aug", earnings: 280000, previousEarnings: 220000 },
      { month: "Sep", earnings: 240000, previousEarnings: 230000 },
      { month: "Oct", earnings: 300000, previousEarnings: 270000 },
    ]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carQuery = `*[_type == "car"]`;
        const rentedCarQuery = `*[_type == "car" && status == "rented"]`;

        const carsData = await client.fetch(carQuery);
        const rentedCarsData = await client.fetch(rentedCarQuery);

        setTotalCars(carsData.length);
        setCarsOnRent(rentedCarsData.length);
        setAvailableCars(carsData.length - rentedCarsData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">ADMIN</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-lg font-medium text-blue-400"><FaTachometerAlt /> <span>Dashboard</span></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        {/* Site Performance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-700 p-6 rounded-xl shadow-md">
            <p className="text-lg font-medium">Total Cars</p>
            <p className="text-3xl font-bold">{totalCars.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="text-lg font-medium">Cars on Rent</p>
            <p className="text-3xl font-bold">{carsOnRent.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="text-lg font-medium">Available Cars</p>
            <p className="text-3xl font-bold">{availableCars.toLocaleString()}</p>
          </div>
        </div>

        {/* Earning Summary Chart */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md mt-6">
          <h2 className="text-xl font-bold mb-4">Earning Summary</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPreviousEarnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <Tooltip />
              <Area type="monotone" dataKey="earnings" stroke="#8884d8" fill="url(#colorEarnings)" />
              <Area type="monotone" dataKey="previousEarnings" stroke="#82ca9d" fill="url(#colorPreviousEarnings)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
