import { ApolloClient } from "apollo-client";
import React from "react";
import AppRouter from "./routes/router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { Auth } from "./components/auth/index";
import "./filebase/config";
import "./css/App.css";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const uploadLink = createUploadLink({
  uri: "http://" + window.location.hostname + ":5000/graphql",
});

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div style={{ overflowY: "scroll" }} className="App">
      <Auth.Provider>
        <ApolloProvider client={client}>
          <AppRouter />
        </ApolloProvider>
      </Auth.Provider>
    </div>
  );
}

export default App;
