import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "../assets/css/Doctor.css";

const api = "https://hayatm.onrender.com";

const DoctorsCarousel = () => {
  const { t } = useTranslation();
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
    <>
      <div className="specialist">
        <h2 className="title service__title">{t("ourdoctors")}</h2>
        {doctors.length > 0 ? (
          <div className="container specialist__intro">
            <div className="specialist__ui-slider-container">
              <div className="specialist__arrows-container">
                <div className="swiper specialist__slider-card specialist-slider--start swiper-container-initialized swiper-container-horizontal">
                  <div className="swiper-wrapper">
                    {doctors.map((doctor) => (
                      <div key={doctor._id}>
                        <div className="p-4 relative-box bg-white rounded-lg shadow-md">
                          <div className="guy">
                            <img
                              src={doctor.image}
                              alt={doctor.en_name}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                          </div>
                          <div className="guy-info">
                            <h3 className="guy-info__name">
                              {doctor.en_name}
                            </h3>
                            <p className="guy-info__position">
                              {doctor.en_position}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No doctors available</p>
        )}
      </div>
    </>
  );
};

export default DoctorsCarousel;
