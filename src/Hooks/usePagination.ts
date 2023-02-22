import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../api/axios";

interface PaginationProps {
  page: number;
  pageSize: number;
}

interface IUpdateEq {
  CurrentPage: string;
  Equipment: {}[];
  itemsPerPage: number;
  totalItems: string;
}

export const useListPagination = ({ page, pageSize }: PaginationProps) => {
  const [updatedList, setListItems] = useState<IUpdateEq | null>(null);
  const [cookies] = useCookies(["token"]);

  let updatedData: any = [];

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    params: new URLSearchParams([
      ["page", page.toString()],
      ["limit", pageSize.toString()],
    ]),
  };

  const getUpdatedList = async (URL: string) => {
    const res = await axios.get(`${URL}list/`, config);
    updatedData = res.data.data;
    setListItems((prev: any) => {
      return {
        ...prev,
        CurrentPage: updatedData.current_page,
        Equipment: updatedData.items,
        pageSize: updatedData.per_page,
        totalItems: updatedData.total,
      };
    });
  };

  return { updatedList, getUpdatedList };
};
