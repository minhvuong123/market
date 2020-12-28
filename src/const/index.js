
export * from './countries/countries.js';
export const api_url = 'http://localhost:4000';
export const supplier = [
    {
        supplier_key: "vs",
        supplier_value: "Vissan"
    },
    {
        supplier_key: "vh",
        supplier_value: "Vĩnh Hoàn"
    },
    {
        supplier_key: "gf",
        supplier_value: "GreenFeed"
    },
    {
        supplier_key: "bh",
        supplier_value: "Ba Huân"
    },
    {
        supplier_key: "nv",
        supplier_value: "Nam Việt"
    },
    {
        supplier_key: "vn",
        supplier_value: "Vineco"
    },
];
export const order_status = [
    {
        order_key: "pending",
        order_value: "Pending"
    },
    {
        order_key: "approved",
        order_value: "Approved"
    },
    {
        order_key: "cancel",
        order_value: "Cancel"
    }
];

export const pageTitle = {
  "admin": 'Users Manager',
  "admin/users": 'Users Manager',
  "admin/products": 'Products Manager',
  "admin/categories": 'Categories Manager',
  "admin/orders": 'Orders Manager',
  "admin/transaction": 'Transaction Manager',
}

export const searchPrices = [
  {
    id: 'asc',
    value: 'Giá: tăng dần'
  },
  {
    id: 'desc',
    value: 'Giá: giảm dần'
  }
]