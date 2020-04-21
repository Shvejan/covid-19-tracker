import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };
  } catch (error) {}
};

export const fetchGraph = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const shortData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return shortData;
  } catch (error) {}
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((c) => c.name);
  } catch (error) {}
};
