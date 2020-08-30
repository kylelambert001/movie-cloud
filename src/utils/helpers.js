export const hasFetched = (name) => {
  return this.props[name].data ? true : false;
};

export const isLoading = (name) => {
  return this.props[name].loading ? true : false;
};
