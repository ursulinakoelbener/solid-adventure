import { useEffect } from 'react';
import Papa from 'papaparse';

export default function CsvLoader({ onData }) {
  useEffect(() => {
    fetch('/grosser-rat.csv')
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => onData(results.data),
        });
      })
      .catch((error) => {
        console.error('CSV loading failed:', error);
      });
  }, [onData]);

  return null;
}
