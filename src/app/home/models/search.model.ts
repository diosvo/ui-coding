import { EUrl } from './url.enum';

interface IBaseValue {
  name: string;
  route: string;
}

interface IGroupValue {
  groupName: string;
  groupDetails: Array<IBaseValue>;
}

interface IMenu {
  name: string;
  route: EUrl;
  active: boolean;
}

export { IGroupValue, IBaseValue, IMenu };

