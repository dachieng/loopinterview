import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Cookies from "js-cookie";

import { fetchMaps } from "./hooks/fetchMaps";

import type { IMap } from "./interfaces";
import AutocompleteSearchBar from "../../components/AutocompleteSearchBar";
import { Button } from "../../stories/Button";
import EmbedMap from "../../components/EmbedMap";

const HomeModule = () => {
  const [maps, setMaps] = useState<IMap[]>([]);
  const [search, setSearch] = useState("");

  // extract tab from url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get("tab");

  // map data
  useEffect(() => {
    fetchMaps().then((data) => {
      if (data) {
        setMaps(data);
      }
    });
  }, []);

  const filterData = maps.filter((map) =>
    map?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddClick = () => {
    const existingItems = JSON.parse(
      localStorage.getItem("searchItems") || "[]"
    );
    existingItems.push(search);
    localStorage.setItem("searchItems", JSON.stringify(existingItems));
    setSearch("");
  };

  const handleBookMarkData = (item: string) => {
    const existingItems = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    existingItems.push(item);
    localStorage.setItem("bookmarks", JSON.stringify(existingItems));
    setSearch("");
  };

  const handleDeleteData = (item: string) => {
    const existingItems = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const updatedItems = existingItems.filter(
      (bookmark: string) => bookmark !== item
    );
    localStorage.setItem("bookmarks", JSON.stringify(updatedItems));
    setSearch("");
  };

  const handleDeleteMapData = (item: string) => {
    const existingItems = JSON.parse(
      localStorage.getItem("searchItems") || "[]"
    );
    const updatedItems = existingItems.filter(
      (bookmark: string) => bookmark !== item
    );
    localStorage.setItem("searchItems", JSON.stringify(updatedItems));
    setSearch("");
    window.location.reload();
  };

  const cookieData = JSON.parse(localStorage.getItem("searchItems") || "[]");
  const bookMarkData = JSON.parse(localStorage.getItem("bookmarks") || "[]");

  return (
    <div className='main-home'>
      <div className='search-container'>
        <AutocompleteSearchBar value={search} handleSearchChange={setSearch} />
        <div>
          <Button label='Add' onClick={handleAddClick} />
        </div>
      </div>
      <div
        className={search !== "" && filterData ? "searchAutocompleteItems" : ""}
      >
        {filterData && search !== ""
          ? filterData.map((item) => (
              <p className='searchItem' onClick={() => setSearch(item.name)}>
                {item.name}
              </p>
            ))
          : null}
      </div>
      {tab === "home" ? (
        <div className='ember-scroll'>
          {cookieData
            ? cookieData.map((item: string) => (
                <div className='cookie-container'>
                  <div className='embed-item'>{<EmbedMap name={item} />}</div>
                  <div className='cookie-items'>
                    <p>{item}</p>
                    <div>
                      {" "}
                      <button
                        className='button-cookie primary'
                        onClick={() => {
                          handleBookMarkData(item);
                        }}
                      >
                        Bookmark
                      </button>
                      <button
                        className='button-cookie danger'
                        onClick={() => {
                          handleDeleteData(item);
                          handleDeleteMapData(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      ) : null}{" "}
      {tab === "bookmarks" ? (
        <div className='ember-scroll'>
          {bookMarkData
            ? bookMarkData.map((item: string) => (
                <div className='cookie-container'>
                  <div className='embed-item'>{<EmbedMap name={item} />}</div>
                  <div className='cookie-items'>
                    <p>{item}</p>
                    <div>
                      <button
                        className='button-cookie danger'
                        onClick={() => {
                          handleDeleteData(item);
                          handleDeleteMapData(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default HomeModule;
