import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchMaps } from "./hooks/fetchMaps";

import type { IMap } from "./interfaces";
import AutocompleteSearchBar from "../../components/AutocompleteSearchBar";
import { Button } from "../../stories/Button";

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

  // if (!maps) return;

  console.log("maps", filterData);

  return (
    <div className='main-home'>
      <div className='search-container'>
        <AutocompleteSearchBar value={search} handleSearchChange={setSearch} />
        <div>
          <Button label='Add' />
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
      {tab === "home" ? <p>This is home</p> : null}{" "}
      {tab === "bookmarks" ? <p>This is bookmarks</p> : null}
    </div>
  );
};

export default HomeModule;
