import Auto from "./Auto";

function AutoList({ autos }) {
  return (
    <div className="autos-lista">
      {autos.map((auto) => (
        <Auto key={auto.id} auto={auto} />
      ))}
    </div>
  );
}

export default AutoList;
