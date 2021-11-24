// library
import React from "react";
// css
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  const { formSubmit, value, handleSearchKey, clearSearch } = props;
  return (
    <div className={`${styles.searchBar}`}>
      <form className="d-flex align-items-center" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Title "
          className={`${styles.input} `}
          value={value}
          onChange={handleSearchKey}
        />
        {value && (
          <span className={`${styles.clear}`} onClick={clearSearch}>
            X
          </span>
        )}
        <button
          className={`${styles.postBtn} btn text-white`}
          style={{ backgroundColor: "#249C46" }}
        >
          Find
        </button>
      </form>
    </div>
  );
}
