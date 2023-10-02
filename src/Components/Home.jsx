import React, { useState } from "react";
import Data from "../assets/data.json";
import Car from "./Car";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(Data.length / recordsPerPage);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className="flex flex-wrap w-3/4 mx-auto gap-4 justify-evenly">
        {records
          .filter((i) => {
            return search.toLowerCase() === ""
              ? i
              : i.name.toLowerCase().includes(search);
          })
          .map((i, id) => {
            return (
              <Car
                key={id}
                name={i.name}
                year={i.year}
                people={i.people}
                type={i.type}
                milaje={i.milaje}
                gear={i.gear}
                price={i.price}
                image={i.image}
              />
            );
          })}
      </div>

      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        recordsPerPage={recordsPerPage}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
        records={records}
        numberOfPages={numberOfPages}
        number={number}
      />
    </>
  );
};

export default Home;

//
