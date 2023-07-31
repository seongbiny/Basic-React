import { useState } from "react";

const Modal = ({ setAddItem, modalVisible, getModal }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const onClickSubmit = (e) => {
    e.preventDefault();
    setAddItem({ name, content, image });
    getModal(false);
  };
  return (
    <div className="modal-background" hidden={!modalVisible}>
      <form className="modal" onSubmit={onClickSubmit}>
        <span className="modal-close" onClick={() => getModal(false)}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="플레이스홀더"
          className="input"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image" className="label">
          이미지
        </label>
        <input
          id="image"
          type="text"
          placeholder="이미지"
          className="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          id="content"
          type="text"
          className="input"
          placeholder="내용 어쩌고 저쩌고"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-button">
          저장
        </button>
      </form>
    </div>
  );
};

export default Modal;
