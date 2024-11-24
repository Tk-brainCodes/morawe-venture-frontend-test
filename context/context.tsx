"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { cardDataProps } from "@/constants";

export interface CardDataProp {
  name: string;
  address: string;
  job: string;
  contact: string;
  avatar: any;
  description: string;
}

interface CandidatesContextType {
  candidates: CardDataProp[];
  filteredCandidates: CardDataProp[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterCandidates: (query: string) => void;
}

const CandidatesContext = createContext<CandidatesContextType | undefined>(
  undefined
);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
  const [candidates] = useState(cardDataProps);
  const [filteredCandidates, setFilteredCandidates] = useState(cardDataProps);
  const [searchQuery, setSearchQuery] = useState("");

  const filterCandidates = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(lowercasedQuery) ||
        candidate.address.toLowerCase().includes(lowercasedQuery) ||
        candidate.job.toLowerCase().includes(lowercasedQuery) ||
        candidate.contact.toLowerCase().includes(lowercasedQuery) ||
        candidate.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredCandidates(filtered);
  };

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        filteredCandidates,
        searchQuery,
        setSearchQuery,
        filterCandidates,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => {
  const context = useContext(CandidatesContext);
  if (!context) {
    throw new Error("useCandidates must be used within a CandidatesProvider");
  }
  return context;
};
