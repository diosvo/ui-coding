import { EUrl } from './url.enum';

interface IBaseValue {
  name: string;
  route: string;
  image: string;
  description: string;
}

interface IGroupValue {
  groupName: string;
  groupDetails: Array<IBaseValue>;
  groupUrl: EUrl;
}

interface IMenu {
  name: string;
  route: EUrl;
  active: boolean;
}

export { IGroupValue, IBaseValue, IMenu };

