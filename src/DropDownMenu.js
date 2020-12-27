import { useFetch } from "./useFetch";
import Option from "./Components/Option";
import Spinner from "./Components/Spinner";

const DropDownMenu = () => {
  const { data, loading } = useFetch();

  return (
    <div className='app'>
      {!loading ? (
        <>
          {data.map((item) => (
            <Option item={item} key={item.id} />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default DropDownMenu;
