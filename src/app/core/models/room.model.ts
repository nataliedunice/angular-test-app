export interface RoomModel {
  id: number;
  type: string;
  count: number;
  price: number;
}

type RoomKeys = keyof RoomModel;

export interface RoomColumnHeader {
  value: RoomKeys;
  name: string;
}
