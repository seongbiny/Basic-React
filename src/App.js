import { useState } from "react";
import Modal from "./modal";

const App = () => {
  const initData = [
    {
      name: "한라산",
      content: "해발 1,940m",
      image: "/hallasan.png",
    },
    {
      name: "설악산",
      content: "해발 1,708m",
      image: "/seoraksan.png",
    },
    {
      name: "북한산",
      content: "해발 836m",
      image: "/bukhansan.png",
    },
    {
      name: "관악산",
      content: "해발 632m",
      image: "gwanaksan.png",
    },
    {
      name: "인왕산",
      content: "해발 338m",
      image: "inwangsan.png",
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
