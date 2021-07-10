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
  name: EUrl;
  data: IGroupValue;
}

export { IGroupValue, IBaseValue, IMenu };

