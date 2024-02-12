import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ items, onDelete }) {
  if (items.length === 0) {
    return (
      <div className={css.text}>
        <p>No contacts found.</p>
      </div>
    );
  }

  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id} className={css.item}>
            <Contact item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
