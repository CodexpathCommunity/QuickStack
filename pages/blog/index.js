import Card from "../../components/Card";
import NavLink from "../../components/NavLink/Index";

function index() {
  return (
    <div>
      <NavLink />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-xl w-full p-4 m-auto mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default index;
