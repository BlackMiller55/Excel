import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useFetch = () => {
  const [cookies] = useCookies(["token"]);
  const [allItems, setAllItems] = useState<[{}]>();
  const [list, setList] = useState<[{}]>();
  const [item, setItem] = useState<[]>();
  const [qrData, setQRData] = useState<[]>();
  const [error, setError] = useState<any>();

  const token = cookies.token;

  // metodo para obtener todos los datos

  const getAll = async (url: string) => {
    try {
      const res: any = await axios.get(`${url}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllItems(res.data.data);
    } catch (err: any) {
      setError(err.response.status);
    }
  };

  // metodo para obtener listas de datos

  const getList = async (url: string) => {
    try {
      const res: any = await axios.get(`${url}list`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setList(res.data.data);
    } catch (err: any) {
      setError(err.response.status);
    }
  };

  // metodo para obtener un elemento especifico

  const getSingle = async (url: string, id?: number) => {
    try {
      const res: any = await axios.get(`${url}${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItem(res.data.data);
    } catch (err: any) {
      setError(err.response.status);
    }
  };
  // metodo exclusivo de QR

  const getQR = async (qr: any) => {
    try {
      const res: any = await axios.get(`${qr}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQRData(res.data.data);
    } catch (err: any) {
      setError(err.response.status);
    }
  };

  return {
    allItems,
    getAll,
    list,
    getList,
    item,
    getSingle,
    error,
    getQR,
    qrData,
  };
};
