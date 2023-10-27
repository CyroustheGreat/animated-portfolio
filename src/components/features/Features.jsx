import "./Features.scss";
const Features = ({ title, description }) => {
  return (
    <div className="Container">
      <h2 className="Container_title">{title}</h2>
      <p className="Container_description">{description}</p>
    </div>
  );
};

export default Features;
