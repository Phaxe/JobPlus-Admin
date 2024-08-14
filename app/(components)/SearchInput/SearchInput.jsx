"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import filterIcon from '/public/filter-icon.svg'; // Ensure the path to your filter icon is correct
import searchIcon from '/public/SearchIcon.svg'; // Ensure the path to your search icon is correct
import SearchModal from "../SearchModal/SearchModal"
import { useLocale, useTranslations } from 'next-intl';
const SearchInput = ({hidden}) => {
  const g = useTranslations("General")
  const locale  = useLocale();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const closeModal = () => {
      setIsModalVisible(false);
    };
  return (
    <div className="relative xl:w-[450px] max-w-lg mx-auto">
      <input
        type="text"
        placeholder={g("searchFor")}
        className={`w-full h-12  border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 ${locale === "ar" ? "pl-12 pr-5 text-right" : "pr-12 pl-5 text-left"}`}
      />
      <div className={`absolute flex items-center ${hidden}  cursor-pointer ${locale === "ar" ? " inset-y-0 left-0 pl-3" : " inset-y-0 right-0 pr-3"}`}>
        <Image src={filterIcon} alt="Filter Icon" width={24} height={24} onClick={showModal} />
      </div>
      <div className={` absolute flex items-center ${locale === "ar" ? "inset-y-0 right-0 " : "inset-y-0 left-0 "}`}>
        <Image src={searchIcon} alt="Search Icon" width={24} height={24}  />
      </div>
      <SearchModal visible={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default SearchInput;