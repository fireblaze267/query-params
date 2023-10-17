import "./styles.css";

export default function Cards({ data }) {
  return (
    <div className="cards-main">
      <label>{data?.title}</label>
      <span>{data?.id}</span>
    </div>
  );
}
