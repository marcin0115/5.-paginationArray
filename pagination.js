// 1) Stwórz funkcję paginateArray, która przyjmuje jako 1 argument tablicę, a jako 2 argument obiekt settings z następującymi kluczami :
//   a) „actualPageIndex” - numer strony.
//   b) „entriesOnPage” – ilośc obiektów na pojedynczej stronie.
//2) Funkcja zwraca entriesOnSelectedPage, który jest arrayem podzielonym według ustawień z settings.

const data = [1, 2, 3, 4, 5, 6];
const settings = { actualPageIdx: 2, entriesOnPage: 2 };

const paginateArray = (
  dataEntries,
  { actualPageIdx, entriesOnPage } = settings
) => {
  const start = actualPageIdx * entriesOnPage - entriesOnPage;
  const end = start + entriesOnPage;

  const entriesOnSelectedPage = dataEntries.slice(start, end);
  return entriesOnSelectedPage;
};
const result = paginateArray(data, settings);
