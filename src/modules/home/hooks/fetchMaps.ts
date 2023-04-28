import type { IMap } from "../interfaces";

export const fetchMaps = async () => {
  try {
    const res = await fetch(
      "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view",
      {
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
          //   "Content-Security-Policy":
          //     "frame-ancestors 'self' https://lookerstudio.google.com",
        },
      }
    );

    const data = await res.json();

    const cleanedData: IMap[] = data.records.map((record: any) => {
      return {
        id: record.id,
        name: record.fields.Name,
      };
    });

    console.log("cleanedData", cleanedData);

    return cleanedData;
  } catch (err) {
    console.error("error: ", err);
  }
};
