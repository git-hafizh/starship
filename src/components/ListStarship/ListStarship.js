import React from "react";
import DataTable from "react-data-table-component";
import { Button } from "reactstrap";
import "./ListStarship.css";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchShip from "./SearchShip/SearchShip";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchShip from "../../Hooks/useFetchShip";
import LoadingIndicator from './LoadingIndicator';

const ListStarship = () => {
  const [searchShip, setSearchShip] = React.useState("");
  const [page, setPage] = React.useState(1)
  const [ships] = useFetchShip(page);

  const GetShip = async (searchShip) => {
    axios
      .get(`https://swapi.dev/api/starships/?search=${searchShip}`)
      .then((result) => {
        const data = result.data.results;
        setSearchShip(data);
      });
  };

  const shipFilter = !searchShip ? ships : searchShip;

  return (
    <div className="table-data">
      <SearchShip searchShip={searchShip} GetShip={GetShip} />
      <InfiniteScroll
        dataLength={shipFilter.length}
        next={() => setPage(page + 1)}
        hasMore={true}
      >
        <DataTable
        className="data-table"
        striped={true}
        noHeader={true}
        data={shipFilter}
        responsive={true}
        columns={[
          {
            name: "Name",
            selector: "name",
            sortable: true,
          },
          {
            name: "Model",
            selector: "model",
            sortable: true,
          },
          {
            name: "Manufacturer",
            selector: "manufacturer",
            sortable: true,
          },
          {
            name: "",
            selector: "",
            sortable: false,
            cell: (list) => (
              <Link to={`/starships/${list.url.replace(/[^0-9]+/g, "")}`}>
                <Button>Detail</Button>
              </Link>
            ),
          },
        ]}
      />
      <LoadingIndicator/>
      </InfiniteScroll>
    </div>
  );
};

export default ListStarship;
