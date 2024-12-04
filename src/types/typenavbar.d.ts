import { Dispatch, SetStateAction } from 'react';

type DirType = 'r' | 'l' | string | null;

export type Position = {
  left: number;
  opacity: number;
  width: number;
};

export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export interface TabItem extends MenuItem {
  subMenus?: MenuItem[];
}

export interface TabState {
  dir: DirType;
  selected: string | null;
  clickEffect: string | null;
  subMenuActiveId: string | null;
}

export interface TabProps {
  handleSetTabState: (val: string | null) => void;
  setPosition: (position: Position) => void;
  setTabState: Dispatch<SetStateAction<TabState>>;
  tab: TabItem;
  tabState: TabState;
}

export interface SubmenuListsProps {
  handleSetTabState: (state: string | null) => void;
  refLi: React.RefObject<HTMLLIElement | null>;
  dir: DirType;
  setSubMenuActiveId: Dispatch<SetStateAction<string | null>>;
  subMenuActiveId: string | null;
  tab: {
    subMenus: MenuItem[];
  };
}
