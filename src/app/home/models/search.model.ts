export class IGroupValue {
  groupName: string;
  groupDetails: Array<IBaseValue>;
  show?: boolean;
}

export class IBaseValue {
  name: string;
  route: string;
}
