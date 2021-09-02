import useSWR from "swr";

export default class StrapiClient {
  constructor() {}
  /**
   * Function to get all agendas
   * @param {*} path
   * @returns Object agendas
   */

  async fetchAgendas(path) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const BASE_URL = `${process.env.BASE_URL}`;
    const { data, error } = useSWR(`${BASE_URL}/${path}`, fetcher);
    // const res = await fetch(`${BASE_URL}${path}`);
    // const agendas = res.json();
    return {
      data,
      error,
    };
  }
}
