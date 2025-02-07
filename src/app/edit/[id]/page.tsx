'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';

// Define the props type
interface EditCarPageProps {
  params: {
    id: string;
  };
}

interface Car {
  name: string;
  price: number;
  discountPrice: number;
  carType: string;
  year: number;
  engine: string;
  transmission: string;
  seatingCapacity: number;
  safety: string[];
  specialFeatures: string[];
  image: string[];
  availability: boolean;
  description: string;
}

const EditCarPage = (props: EditCarPageProps) => {
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Extract `id` from props.params
  const carId = props.params.id;

  useEffect(() => {
    if (!carId) return;

    const fetchCarDetails = async () => {
      try {
        const query = `*[_type == "car" && _id == $id][0]{
          name,
          "price": pricePerDay,
          "discountPrice": discountPricePerDay,
          "carType": type,
          year,
          engine,
          transmission,
          "seatingCapacity": seatingCapacity,
          safety,
          specialFeatures,
          "image": image.asset->url,
          availability,
          description
        }`;

        const result = await client.fetch(query, { id: carId });
        if (result) {
          setCar({
            name: result.name || '',
            price: result.price || 0,
            discountPrice: result.discountPrice || 0,
            carType: result.carType || '',
            year: result.year || 2023,
            engine: result.engine || '',
            transmission: result.transmission || '',
            seatingCapacity: result.seatingCapacity || 0,
            safety: result.safety || [],
            specialFeatures: result.specialFeatures || [],
            image: Array.isArray(result.image) ? result.image : result.image ? [result.image] : [],
            availability: result.availability || true,
            description: result.description || '',
          });
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCar((prevCar) => (prevCar ? { ...prevCar, [e.target.name]: e.target.value ?? '' } : null));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!car || !carId) return;

    try {
      await client
        .patch(carId)
        .set({
          name: car.name,
          pricePerDay: car.price,
          discountPricePerDay: car.discountPrice,
          type: car.carType,
          year: car.year,
          engine: car.engine,
          transmission: car.transmission,
          seatingCapacity: car.seatingCapacity,
          safety: car.safety,
          specialFeatures: car.specialFeatures,
          image: car.image,
          availability: car.availability,
          description: car.description,
        })
        .commit();

      alert('Changes saved!');
      router.push('/admin/product');
    } catch (error) {
      console.error('Error saving car details:', error);
      alert('Failed to save changes');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found.</p>;

  return (
    <section className="py-12 bg-gray-100 flex min-h-screen">
      <div className="w-full md:w-3/4 container mx-auto px-4 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 text-center">Edit Car Details</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
              placeholder="Car Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={car.price}
              onChange={handleChange}
              placeholder="Price Per Day"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="discountPrice"
              value={car.discountPrice}
              onChange={handleChange}
              placeholder="Discount Price Per Day"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="carType"
              value={car.carType}
              onChange={handleChange}
              placeholder="Car Type"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              placeholder="Year"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="engine"
              value={car.engine}
              onChange={handleChange}
              placeholder="Engine"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="transmission"
              value={car.transmission}
              onChange={handleChange}
              placeholder="Transmission"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="seatingCapacity"
              value={car.seatingCapacity}
              onChange={handleChange}
              placeholder="Seating Capacity"
              className="w-full p-2 border rounded"
            />
            <textarea
              name="description"
              value={car.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCarPage;