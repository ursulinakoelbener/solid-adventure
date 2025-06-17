// This component fetches a CSV file and parses it using PapaParse.

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function CsvLoader({ onData }) {
  useEffect(() => {
    fetch('/data.csv')
      .then(res => res.text())
      .then(text => {
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: results => onData(results.data),
        });
      });
  }, [onData]);

  return null;
}
