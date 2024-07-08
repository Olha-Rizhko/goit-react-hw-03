import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.item}>
      <div>
        <div className={css.contactTitle}>
          <FaUser className={css.contactIcon} />
          <p className={css.contactInfo}>{name}</p>
        </div>

        <div className={css.contactTitle}>
          <FaPhoneAlt className={css.contactIcon} />
          <p className={css.contactInfo}>{number}</p>
        </div>
      </div>
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
