import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const api = 'https://hayatm.onrender.com';

const DoctorsCarousel = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${api}/doctors`);
      console.log("Fetched Doctors:", response.data.doctors); 
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Our Doctors</h2>
      {doctors.length > 0 ? (
        <Swiper
          key={doctors.length}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor._id}>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.en_name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{doctor.en_name}</h3>
                <p className="text-gray-500">{doctor.en_position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No doctors available</p>
      )}
    </div>
  );
};

export default DoctorsCarousel;
