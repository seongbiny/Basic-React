import { useState } from "react";
import Modal from "./modal";

const App = () => {
  const initData = [
    {
      name: "",
      content: "",
      image: "",
    },
  ];

  const [data, setData] = useState(initData);
  const [modalVisible, setModalVisible] = useState(false);

  const setAddItem = (item) => {
    setData([...data, item]);
  };
  const getModal = (value) => {
    setModalVisible(value);
  };

  return (
    <div>
      <header>
        <span className="title">산 List</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => setModalVisible(true)}
          >
            추가
          </button>
          {data.map((item, v) => (
            <span key={v}>{item.name}</span>
          ))}
        </div>
        <section className="container">
          {data.map((item, v) => (
            <div className="card" key={v}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        setAddItem={setAddItem}
        modalVisible={modalVisible}
        getModal={getModal}
      />
    </div>
  );
};

export default App;
