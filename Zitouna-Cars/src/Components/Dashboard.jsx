import CarTable from "./CarTable";

function Dashboard({ cars, deleteCar }) {
  function handleDelete(id) {
    const sure = window.confirm("Delete this car?");
    if (sure) {
      deleteCar(id);
    }
  }

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <CarTable cars={cars} onDelete={handleDelete} />
    </div>
  );
}

export default Dashboard;