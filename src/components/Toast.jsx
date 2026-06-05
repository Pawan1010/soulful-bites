// src/components/Toast.jsx
import "../styles/Toast.css";

/**
 * @param {{ visible: boolean, message: string }} props
 */
export default function Toast({ visible, message }) {
  return (
    <div className={`toast${visible ? " show" : ""}`}>
      {message}
    </div>
  );
}
