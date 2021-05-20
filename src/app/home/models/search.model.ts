export class IGroupValue {
  groupName: string;
  groupDetails: Array<IBaseValue>;
}

export class IBaseValue {
  name: string;
  route: string;
}

export interface IOptionItem {
  name: string;
  show: boolean;
}
