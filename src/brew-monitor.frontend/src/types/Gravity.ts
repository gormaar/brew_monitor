export type Gravity = {
  id: number;
  realTimeValue: number;
  originalGravity: number;
  specificGravity: number;
  finalGravity: number;
  targetOG: number;
  targetSG: number;
  targetFG: number;
  createdAt: Date;
  updatedAt: Date;
  brewId: string;
};
