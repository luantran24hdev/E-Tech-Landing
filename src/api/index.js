export default {
  searchQuery: {
    getAll: (searchStr) => {
      console.log("searchStr", searchStr);
      return `/searchbreeders?q=${searchStr}`;
    },
  },
  customers: {
    register: () => `/customers`,
    login: () => `/customers/log-in`,
    contact: () => `/contact`,
  },
};
