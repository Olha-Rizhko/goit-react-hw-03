import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ items, onDelete }) {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <Contact contact={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
