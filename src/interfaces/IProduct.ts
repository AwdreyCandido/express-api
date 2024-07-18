interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  // EXTRA FIELDS
  updatedAt: Date;
  quantity?: number;
  categoryId?: number;
  departmentId?: number;
  tags?: string;
}

export default IProduct;
