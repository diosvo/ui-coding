const filterGroup = (opt: string[], value: string): any[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

export { filterGroup };

