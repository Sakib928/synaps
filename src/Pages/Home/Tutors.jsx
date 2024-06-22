import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Tutors = () => {
  const { data: tutors = [] } = useQuery({
    queryKey: ["tutor"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tutors");
      return res.data;
    },
  });
  // console.log(tutors);
  return (
    <div className="text-center my-8">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {tutors?.map((tutor) => {
          return (
            <div key={tutor._id}>
              <SwiperSlide>
                <h1>{tutor?.name}</h1>
                <p>Email : {tutor?.email}</p>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Tutors;
