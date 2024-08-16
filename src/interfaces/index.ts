type id = number | string;

export interface ICollapseData {
  id: id;
  title: string;
  parentId: id;
  children: ICollapseData[];
  [key: string]: any;
}

interface IAddItemComponent {
  parentId?: id;
}

interface IHoverComponent {
  parentId?: id;
  addChild: (e: any) => void;
}

export interface ICollapse {
  parentIndex?: number;
  data?: ICollapseData[];
  item?: ICollapseData;
  isLoading: boolean;
  showHeaderBorder?: boolean;
  showBodyBorder?: boolean;
  colors?: string[];
  AddItemButtonTitle?: () => JSX.Element;
  AddItemComponent?: ({ parentId }: IAddItemComponent) => JSX.Element;
  HoverComponent?: ({ parentId, addChild }: IHoverComponent) => JSX.Element;
  EmptyComponent?: () => JSX.Element;
  HeaderOpenIcon?: () => JSX.Element;
  HeaderCloseIcon?: () => JSX.Element;
}

export interface ICollapseButtons {
  item: ICollapseData;
  toggleAddMessage: (e: any) => void;
  HoverComponent?: ({ parentId, addChild }: IHoverComponent) => JSX.Element;
}
