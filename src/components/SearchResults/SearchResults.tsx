import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { searchForTVShows } from "../../services/TVShows/tvshows.service";
import List from "../List";

interface ParamTypes {
  query: string;
}

const SearchResults = (): ReactElement => {
  const { query } = useParams<ParamTypes>();
  return <List getTVShows={() => searchForTVShows(query)} />;
};

export default SearchResults;
