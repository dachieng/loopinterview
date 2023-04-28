export const fetchMaps = async () => {
  try {
    const res = await fetch(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view",
      { headers: { Authorization: "Bearer keyfXgn8PL6pB3x32" } }
    );

    const data = await res.json();

    console.log("data", data);

    return data;
  } catch (err) {
    console.error("error: ", err);
  }
};
