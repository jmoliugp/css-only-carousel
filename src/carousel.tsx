import "./carousel.css";

export const Carousel: React.FC = () => {
  return (
    <section>
      <div className="slider">
        <a href="#img_1">
          <img
            src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Slide 1"
          />
        </a>
        <a href="#img_2">
          <img
            src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Slide 2"
          />
        </a>
        <a href="#img_3">
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Slide 3"
          />
        </a>
        <a href="#img_4">
          <img
            src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Slide 4"
          />
        </a>
      </div>

      <div className="background-overlay"></div>

      <ul className="markers">
        <li>
          <a href="#img_1"></a>
        </li>
        <li>
          <a href="#img_2"></a>
        </li>
        <li>
          <a href="#img_3"></a>
        </li>
        <li>
          <a href="#img_4"></a>
        </li>
      </ul>
    </section>
  );
};
