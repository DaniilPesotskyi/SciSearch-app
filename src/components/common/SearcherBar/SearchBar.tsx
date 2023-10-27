"use client";

import css from "./SearchBar.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import clsx from "clsx";

import { formulas } from "@/api/formulas";

import { getLetters } from "@/helpers";
import { selectFilter } from "@/redux/filter/selectors";
import { addFilter, removeFilter } from "@/redux/filter/filterSlice";

const SearchBar: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFormulas = (): string[] => {
    const resultFormulas: string[] = [];
    formulas.forEach((el) => {
      resultFormulas.push(el.formula);
    });

    return resultFormulas;
  };

  const avalaibleLetters = getLetters(getFormulas()).filter(
    (letter) => !filters.includes(letter)
  );

  const onAddWordsModalRender = () => {
    return (
      <div className={css.addFilterWrap}>
        <ul className={css.addFilterList}>
          {avalaibleLetters.length > 0 ? (
            avalaibleLetters.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  className={css.filterBtn}
                  onClick={() => dispatch(addFilter(l))}
                >
                  {l}
                </button>
              </li>
            ))
          ) : (
            <p className={css.altText}>Доступних елементів немає</p>
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className={css.wrap}>
      <button
        className={clsx(css.addBtn, isAddModalOpen && css.open)}
        type="button"
        onClick={() => setIsAddModalOpen(!isAddModalOpen)}
      >
        <AddIcon className={clsx(css.addIcon, isAddModalOpen && css.open)} />
      </button>
      <ul className={css.list}>
        {filters.length > 0 ? (
          filters?.map((l) => {
            return (
              <li key={l}>
                <button
                  type="button"
                  className={css.filterBtn}
                  onClick={() => dispatch(removeFilter(l))}
                >
                  {l}
                </button>
              </li>
            );
          })
        ) : (
          <p className={css.altText}>Додайте хоча б один елемент</p>
        )}
      </ul>
      <button className={css.clearBtn} type="button">
        <TrashIcon className={css.clearIcon} />
      </button>
      {isAddModalOpen && onAddWordsModalRender()}
    </div>
  );
};

export default SearchBar;

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        strokeWidth="1.3"
        d="M9.75 3.25h6.5m-13 3.25h19.5m-17.333 0L6.2 18.27c.106 1.578.158 2.367.5 2.965a3 3 0 001.297 1.215c.62.3 1.411.3 2.993.3h4.018c1.582 0 2.373 0 2.993-.3a3 3 0 001.298-1.215c.341-.598.394-1.387.499-2.966L20.583 6.5"
      ></path>
    </svg>
  );
}

function AddIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
    >
      <path d="M22.547 13a.61.61 0 01-.61.61H13.61v8.328a.61.61 0 01-1.218 0v-8.329h-8.33a.61.61 0 110-1.218h8.329V4.062a.61.61 0 111.218 0v8.329h8.329a.61.61 0 01.609.609z"></path>
    </svg>
  );
}
