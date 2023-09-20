import Counting from "./Counting";
const App = (props) => {
  return (
    <div className="container-sm m-2 p-2">
      <div className="row">
        <div className="col"></div>
        <div className="col-8">
          <div className="m-2 p-2">
            <Counting />
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default App;
