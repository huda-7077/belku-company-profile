import { FC } from "react";

const MapIframe: FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1592.6250731560556!2d110.17816554369224!3d-7.897823823983436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1731881136516!5m2!1sid!2sid"
      width="700"
      height="320"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapIframe;
